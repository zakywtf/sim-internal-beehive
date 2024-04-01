const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Users = require("../schemas/users");
const TestJson = require("../schemas/test_json");

const { generate } = require("../helpers/randGen");
const { detailEmail } = require("../helpers/sendEmail")
const { inboundOutbound } = require("../helpers/masterFunction")

const IndexController = {

    index: async (req, res) => {
        const active_menu = 'home'
        const head_title = 'Beehive Drones: Best Drone System Provider Company'

        res.render('account-pages/login');
    },

    dashboard: async (req, res) => {
        const active_menu = 'home'
        const head_title = 'Beehive Drones: Best Drone System Provider Company'

        res.render('dashboard/index');
    },


    // ==========================================================================================================================================

    ping: (req, res) => {
        const items = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

        const arrInboundOutbound = inboundOutbound(items)
        return apiResponse.successResponseWithData(res, 'Pong', arrInboundOutbound);
    },

    scanner: (req, res) => {
        res.render('scanner/index');

    },

    contactUs: async (req, res, next) => {
        const mailOptions = {
            from: req.body.name + ' <' + req.body.email + '>',
            to: 'novazaky1@gmail.com',
            subject: "Enquiry from " + req.body.name,
            text: req.body.message,
            html: `
                <p>Name: ${req.body.name}</p>
                <p>Email: ${req.body.email}</p>
                <p>${req.body.message}</p>
            `
        }

        try {
            let contact = new ContactUs(req.body);

            contact.save((err) => {
                if(err) return next(err);
            });

            await mailer.sendMail(mailOptions);

            return apiResponse.successResponse(res, 'Thank You. Our representative will contact you shortly.');
        } catch (error) {
            return next(error);
        }
    },

    reduceLimits: async (req, res) => {
        return apiResponse.successResponse(res, 'Key: '+req.query.key);
    },

    randString: (req, res) => {
        const rand = generate(80, false)
        return apiResponse.successResponseWithData(res, 'Random String', rand);
    },

    testJson: async (req, res) => {
        console.log({body: req.body})
        const obj = req.body
        const string = JSON.stringify(obj)
        const input = {
            json: string 
        }
        const data = await TestJson.create(input)
        return apiResponse.successResponseWithData(res, 'Success', data);
    },

    testSendEmail: async (req, res) => {
        const dataEmail = {
            name: "zaky",
            email: "novazaky1@gmail.com",
            password: "123456"
        }
        await detailEmail('send-password', dataEmail)    

    }

    // serviceLandCharacteristic: async (req, res) => {
    //     const data = await serviceLandCharacteristic(req.query.village_id)
    //     return apiResponse.successResponseWithData(res, 'Data retrieved', data);
    // },
    
}

module.exports = IndexController;