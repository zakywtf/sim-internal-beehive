const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const moment = require('moment-timezone');

const Schema = require("../schemas/users");
const Attendance = require("../schemas/attendances");

const { generate } = require("../helpers/randGen")
const { imagesUploader } = require("../helpers/imagesUploader")

const EmployeesController = {

    index: async (req, res) => {
        var datas = await Schema.find({ role: 'staff' }).sort({ created_at: -1 })

        res.render('employees/index', { datas });
    },

    attendance: async (req, res) => {
        var datas = []
        var resp = await Attendance.find({ user_id: req.query.user_id }).sort({ created_at: -1 })
        for (let i = 0; i < resp.length; i++) {
            const e = resp[i];
            const clock_in_int = moment(e.clock_in).format("Hmm")
            const obj = { ...e._doc, int_time:parseInt(clock_in_int) }

            datas.push(obj)
        }
        // res.render('attendances/index');
        res.render('employees/attendance', { datas });
    },

    allAttendance: async (req, res) => {
        var datas = []
        const first = moment();
        const last = moment().add(1, 'day');
        var resp = await Attendance.find({ created_at: { '$gte': new Date(first.format('YYYY-MM-DD')), '$lt': new Date(last.format('YYYY-MM-DD')) }}).sort({ created_at: -1 })
        // console.log({resp})
        for (let i = 0; i < resp.length; i++) {
            const e = resp[i];
            const clock_in_int = moment(e.clock_in).format("Hmm")
            const obj = { ...e._doc, int_time:parseInt(clock_in_int) }

            datas.push(obj)
        }
        // res.render('attendances/index');
        res.render('attendances/index', { datas });
    },

    detail: async (req, res) => {
        var data = await Schema.findOne({ _id: req.query.user_id })
        // console.log({data})
        res.render('employees/detail', { data });
    },

    reqLeave: async (req, res) => {

        res.render('employees/request-leave');
    },

    create: async (req, res) => {

        res.render('employees/create');
    },
    
    

    // ==========================================================================================================================================

    insert: async (req, res, next) => {

        try {

            if (req.files) {
                console.log({
                    photo: req.files.photo
                })
                const files = req.files;

                if (files.photo) {
                    req.body.photo = await imagesUploader(files.photo, 'public/photos/')
                }
            }
            console.log({body: req.body});
            let obj = new Schema({...req.body});
            await obj.save(async (err, data) => {
                if (err) console.log({err});
                res.redirect('/web/v1/employees');
            });

        } catch (error) {
            console.log('error ', error);
        }
    },
    
}

module.exports = EmployeesController;