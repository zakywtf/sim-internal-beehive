const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamp = require('./plugins/timestamps');

let sch = new Schema({
    code: {
        type: String,
    },
    name: {
        type: String
    },
    created_by: {
        type: Schema.Types.ObjectId,
        autopopulate: { select: 'employee_id name photo' },
        ref: 'users'
    },
    project_id: {
        type: Schema.Types.ObjectId,
        autopopulate: { select: 'code name' },
        ref: 'projects'
    },
    label: {
        type:String, 
        enum:['feature', 'bug', 'note'], 
        default:'note'
    },
    description: {
        type: String
    },
    timer: {
        type: Number
    },
    stop_reason: {
        type: String
    }
});

sch.plugin(timestamp);
sch.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("sprints_task", sch);