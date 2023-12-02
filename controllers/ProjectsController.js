const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/projects");
const Users = require("../schemas/users");
const Tickets = require("../schemas/tickets");
const SprintsTask = require("../schemas/sprints_task");
const moment = require('moment-timezone');

const { generate } = require("../helpers/randGen")

const ProjectsController = {

    index: async (req, res) => {
        var assignees = await Users.find({ status: 'active', isDeleted: false, role: 'staff' }).select("-password")
        if (req.session.role == 'developer' || req.session.role == 'pm') {
            var datas = await Schema.find({}).sort({ created_at: -1 })
        } else {
            var datas = await Schema.find({assignee: req.session.user_id}).sort({ created_at: -1 })
        }
        res.render('projects/index', { assignees, datas });
    },

    detail: async (req, res) => {
        var data = await Schema.findOne({ _id: req.query.project_id })
        var tickets = await Tickets.find({ project_id: req.query.project_id })
        // console.log({tickets})
        res.render('projects/detail', { data, tickets });
    },
    
    tasks: async (req, res) => {
        var data = await Schema.findOne({ _id: req.query.project_id })
        var todos = await SprintsTask.find({ project_id: req.query.project_id, status: 'todo' })
        var progress = await SprintsTask.find({ project_id: req.query.project_id, status: 'progress' })
        var dones = await SprintsTask.find({ project_id: req.query.project_id, status: 'done' })

        // console.log({ todos, progress, dones })
        
        res.render('projects/task', { data, todos, progress, dones });
    },

    documentation: async (req, res) => {
        res.render('projects/documentation');
    },

    // ==========================================================================================================================================

    insert: async (req, res, next) => {

        try {
            console.log({ body: req.body });
            const code = await generate(4)
            let obj = new Schema({...req.body, assignor: req.session.user_id, code: code});
            await obj.save(async (err, data) => {
                if (err) console.log({err});
                res.redirect('/web/v1/projects');
            });

        } catch (error) {
            console.log('error ', error);
        }
    },

    insert_tickets: async (req, res, next) => {

        try {
            console.log({ body: req.body });
            const code = await generate(6, false)
            let obj = new Tickets({...req.body, created_by: req.session.user_id, code: code});
            await obj.save(async (err, data) => {
                if (err) console.log({err});
                res.redirect('/web/v1/projects/detail?project_id='+req.body.project_id);
            });

        } catch (error) {
            console.log('error ', error);
        }
    },

    insert_tasks: async (req, res, next) => {

        try {
            console.log({ body: req.body });
            var project = await SprintsTask.findOne({ project_id: req.body.project_id }).countDocuments()
            var inc_code = project + 1
            const name = (req.body.label == 'feature') ? "Feature : "+req.body.name : "Fix Bug : "+req.body.name
            let obj = new SprintsTask({...req.body, name:name, created_by: req.session.user_id, inc_code: inc_code});
            await obj.save(async (err, data) => {
                if (err) console.log({err});
                res.redirect('/web/v1/projects/task?project_id='+req.body.project_id);
            });

        } catch (error) {
            console.log('error ', error);
        }
    },

    done_tickets: async (req, res, next) => {
        try {
            var data = await Tickets.findOne({ _id: req.query.ticket_id })
            data.isDone = true
            await data.save()

            res.redirect('/web/v1/projects/detail?project_id='+data.project_id._id);

        } catch (error) {
            console.log('error ', error);
        }
    },

    update_status_task: async (req, res, next) => {
        try {
            console.log({status: req.query.status, _id: req.query.task_id })
            var data = await SprintsTask.findOne({ _id: req.query.task_id })
            data.status = req.query.status
            data.updated_at = moment()
            await data.save()

            res.redirect('/web/v1/projects/task?project_id='+data.project_id._id);

        } catch (error) {
            console.log('error ', error);
        }
    }
    
}

module.exports = ProjectsController;