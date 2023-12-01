const Users = require("../schemas/users");
const Attendances = require("../schemas/attendances");
const { check, validationResult, body } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");
const bcrypt = require("bcryptjs");
const { signer } = require("../middlewares/authMiddleware")
const { generate } = require("../helpers/randGen");

const Controller = {
    profile: async (req, res) => {

        res.render('account-pages/profile');
    },

    login: async (req, res, next) => {

        try {
            // const useragent = req.useragent
            // console.log({ useragent })
            const { browser, version, os, platform, source } = req.useragent
            
            let user = await Users.findOne({ 'employee_id': req.body.employee_id, status: 'active' })
            
            if (!user) {
			    // res.render('login/index',{error : 'User tidak di temukan'});
                res.json({ success: 400, message: 'User Not Found'})
            } else {
                const isMatch = await bcrypt.compare(req.body.password+process.env.SALT, user.password)

                if (!isMatch) {
                    // res.render('login/index',{error : 'Password Salah!'});
                    res.json({ success: 400, message: 'Password Incorect!'})

                } else {
                    user.online.status = 'online'
                    await user.save()

                    const ug = {
                        browser : browser,
                        version : version,
                        os : os,
                        platform : platform,
                        source : source
                    }
                    // console.log({user})
                    var start = new Date();
                    start.setHours(0,0,0,0);

                    var end = new Date();
                    end.setHours(23, 59, 59, 999);
                    const attendances = await Attendances.findOne({ user_id: user._id, created_at: { $gte: start, $lt: end } });
                    // console.log({attendance})
                    if (!attendances) {
                        await Attendances.create({user_id: user.id, user_agent: ug})
                    }
                    req.session.user_id = user._id;
                    req.session.employee_id = user.employee_id;
                    req.session.name = user.name;
                    req.session.email = user.email;
                    req.session.phone = user.phone;
                    req.session.role = user.role;
                    req.session.photo = user.photo;
                    req.session.jobdesc = user.jobdesc;
                    req.session.password = req.body.password;
                    req.session.online = true,
                    
                    res.json({ success: 200, data: { user_id: user._id, employee_id: user.employee_id, name: user.name, role: user.role } })

                }
            }

        } catch (error) {
            console.log('error ', error);
        }
    },

    logout: async (req, res, next) => {
        let user = await Users.findOne({ _id: req.session.user_id })
        user.online.status = 'offline'
        await user.save()

        delete req.session.online;
	    res.redirect(`/`)


    },







    //  API
    register: async (req, res, next) => {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return apiResponse.validationErrorWithData(res, "Validation Error.", errors.array());
        }

        if (req.files) {
            const uploadedImage = req.files;

            if (req.files.proof_of_payment){
                req.body.proof_of_payment = uploadedImage.proof_of_payment[0]["location"];
            }
        }

        try {

            let user = new Users({ ...req.body });
            
            user.save(async(err, user) => {
                if (err) return apiResponse.ErrorResponse(res, err);

                return apiResponse.successResponseWithData(res, "Registration Success.", { name: user.name, email: user.email });
            });
        } catch (error) {
			return apiResponse.ErrorResponseWithData(res, 'Server Error', error);
        }
    },
    loginApps: async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return apiResponse.validationErrorWithData(res, "Validation Error.", errors.array());
        }

        try {
            let user = await Users.findOne({email: req.body.email})
            if (!user) return apiResponse.notFoundResponse(res, "user ID not found");
            var payload = {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
            const isMatch = await bcrypt.compare(req.body.password + process.env.SALT, user.password)
            if (!isMatch) return apiResponse.validationError(res, "Incorrect Password");

            const token = await signer(payload)
            payload.token = token

            return apiResponse.successResponseWithData(res, "Login Success.", payload);

        } catch (error) {
            return apiResponse.ErrorResponseWithData(res, 'Server Error', error);
        }
    },

    change_pass:async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return apiResponse.validationErrorWithData(res, "Validation Error.", errors.array());
        }

        try {
            const { old_password, new_password } = req.body;
            let user = await Users.findOne({_id: req.user._id, isDeleted: false})
            if(!user) return apiResponse.notFoundResponse(res, "user ID not found");

            let newPasswordHash = await bcrypt.hash(new_password+user.email, 10);
            const isMatch = await bcrypt.compare(old_password+user.email, user.password);

            if (!isMatch)
                return apiResponse.unauthorizedResponse(res, "Incorrect old password");

            user.password = newPasswordHash
            user.save((err, data) => {
                if (err) return apiResponse.ErrorResponse(res, err);

                return apiResponse.successResponseWithData(res, "Change password successfully.");
            });
          } catch (error) {
            return next(error);
          }
    }
}

module.exports = Controller;