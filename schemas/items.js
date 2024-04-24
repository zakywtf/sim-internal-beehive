const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamp = require('./plugins/timestamps');

let sch = new Schema({
    code: {
        type: String,
    },
    serial_number: {
        type: String
    },
    name: {
        type: String,
    },
    amount: {
        type: Number
    }, 
    unit: {
        type: String
    },
    condition: {
        type: String
    },
    temp_location: {
        type: String
    },
    grouping: {
        type: String
    }
});

sch.plugin(timestamp);
sch.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("items", sch);