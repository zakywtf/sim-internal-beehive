const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Users = require("../schemas/users");
const Attendances = require("../schemas/attendances");
const ReqItems = require("../schemas/req_items");
const Outbounds = require("../schemas/outbounds");
const Inbounds = require("../schemas/inbounds");
const TestJson = require("../schemas/test_json");
const moment = require('moment-timezone');

const { generate } = require("../helpers/randGen");

var start = new Date();
start.setHours(0,0,0,0);

var end = new Date();
end.setHours(23, 59, 59, 999);

const DashboardController = {
    
    index: async (req, res) => {
        const dateNow = moment().format('dddd, DD MMMM YYYY')
        
        const attendances = await Attendances.findOne({ user_id: req.session.user_id, created_at: { $gte: start, $lt: end } });
        const clock_in = (attendances.clock_in == null) ? '-' : moment(attendances.clock_in).format('HH:mm')
        const clock_out = (attendances.clock_out == null) ? '-' : moment(attendances.clock_out).format('HH:mm')
        const breaks = (attendances.break == null) ? '-' : moment(attendances.break).format('HH:mm')

        const total_req_items = await ReqItems.find({ status: 'requested' }).countDocuments()
        const total_outbounds = await ReqItems.find({ }).countDocuments()
        const total_inbounds = await ReqItems.find({ }).countDocuments()


        if (req.session.role == 'inventory') {
            res.render('dashboard/inventory-dashboard', { total_req_items, total_outbounds, total_inbounds });
            
        } else {
            res.render('dashboard/index', { dateNow, clock_in, clock_out, breaks });
        }
    },

    clock_in: async (req, res) => {
        const attendances = await Attendances.findOne({ user_id: req.session.user_id, created_at: { $gte: start, $lt: end } });
        attendances.clock_in = moment()
        attendances.picture = req.body.picture
        await attendances.save()

        const clock_in = (attendances.clock_in == null) ? '-' : moment(attendances.clock_in).format('HH:mm')
        const clock_out = (attendances.clock_out == null) ? '-' : moment(attendances.clock_out).format('HH:mm')
        const breaks = (attendances.break == null) ? '-' : moment(attendances.break).format('HH:mm')

        res.json({ success: 200, data: { clock_in, clock_out, breaks } })

    },

    clock_out: async (req, res) => {
        const attendances = await Attendances.findOne({ user_id: req.session.user_id, created_at: { $gte: start, $lt: end } });
        var duration = moment.duration(moment().diff(moment(attendances.clock_in)));
        var hours = duration.asHours();
        var roundedHours = hours.toFixed(1);
        attendances.clock_out = moment()
        attendances.total_hours = roundedHours
        await attendances.save()

        const clock_in = (attendances.clock_in == null) ? '-' : moment(attendances.clock_in).format('HH:mm')
        const clock_out = (attendances.clock_out == null) ? '-' : moment(attendances.clock_out).format('HH:mm')
        const breaks = (attendances.break == null) ? '-' : moment(attendances.break).format('HH:mm')

        res.json({ success: 200, data: { clock_in, clock_out, breaks } })
    },

    break: async (req, res) => {
        const attendances = await Attendances.findOne({ user_id: req.session.user_id, created_at: { $gte: start, $lt: end } });
        attendances.break = moment()
        await attendances.save()

        const clock_in = (attendances.clock_in == null) ? '-' : moment(attendances.clock_in).format('HH:mm')
        const clock_out = (attendances.clock_out == null) ? '-' : moment(attendances.clock_out).format('HH:mm')
        const breaks = (attendances.break == null) ? '-' : moment(attendances.break).format('HH:mm')

        res.json({ success: 200, data: { clock_in, clock_out, breaks } })
    },

    
}

module.exports = DashboardController;