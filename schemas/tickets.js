const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamp = require('./plugins/timestamps');

let sch = new Schema({
    code: {
        type: String,
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
        type: String,
        default: null
    },
    description: {
        type: String, 
        default: null
    },
    isDone: {
        type: Boolean,
        default: false
    },
});

sch.plugin(timestamp);
sch.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("tickets", sch);