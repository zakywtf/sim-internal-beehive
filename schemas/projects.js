const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamp = require('./plugins/timestamps');

let sch = new Schema({
    code: {
        type: String,
    },
    name: {
        type: String,
    },
    role: {
        type: String
    },
    urgency: {
        type: String
    },
    duration: {
        type: Number
    },
    deadline: {
        type: Date
    },
    status: {
        type:String, 
        enum:['active', 'inactive'], 
        default:'active'
    },
    assignor: {
        type: Schema.Types.ObjectId,
        autopopulate: { select: 'employee_id name photo position division jobdesc' },
        ref: 'users'
    },
    assignee: {
        type: Schema.Types.ObjectId,
        autopopulate: { select: 'employee_id name photo position division jobdesc' },
        ref: 'users'
    },
    logo: {
        type: String
    },
    tech: {
        type: String
    },
    goals: {
        type: String
    },
    description: {
        type: String
    },
    progress: {
        type: Number
    },
    work_duration: {
        type: Number
    }
});

sch.plugin(timestamp);
sch.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("projects", sch);