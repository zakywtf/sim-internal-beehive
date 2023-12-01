const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamp = require('./plugins/timestamps');

let sch = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        autopopulate: { select: 'employee_id name photo position division' },
        ref: 'users'
    },
    clock_in: {
        type: Date,
        default: null
    },
    clock_out: {
        type: Date,
        default: null
    },
    break: {
        type: Date,
        default: null
    },
    total_hours: {
        type: Number,
        default: 0
    },
    user_agent:{
        browser: {
            type: String,
            default: null
        },
        version: {
            type: String,
            default: null
        },
        os: {
            type: String,
            default: null
        },
        platform: {
            type: String,
            default: null
        },
        source: {
            type: String,
            default: null
        }
    },
    location: {
        lon: {
            type: String,
            default: null
        },
        lat: {
            type: String,
            default: null
        },
        address: {
            type: String,
            default: null
        }
    },
    picture: {
        type: String,
        default: null
    }
});

sch.plugin(timestamp);
sch.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("attendances", sch);