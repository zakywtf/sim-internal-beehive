const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamp = require('./plugins/timestamps');

let sch = new Schema({
    inc_code: {
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
    status : {
        type:String, 
        enum:['todo', 'progress', 'done'], 
        default:'todo'
    },
    label: {
        type:String, 
        enum:['feature', 'fix-bug'], 
        default:'feature'
    },
    description: {
        type: String,
        default: null
    },
    documentation: {
        type: String,
        default: null
    },
    comments: [{
        created_by: {
            type: Schema.Types.ObjectId,
            autopopulate: { select: 'employee_id name photo' },
            ref: 'users'
        },
        created_at: {
            type: Date
        },
        notes: {
            type: String
        }
    }],
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