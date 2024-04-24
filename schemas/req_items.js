const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamp = require('./plugins/timestamps');

let sch = new Schema({
    request_id: {
        type: String
    },
    items:[{
        item_id: {
            type: Schema.Types.ObjectId,
            autopopulate: { select: 'code name serial_number' },
            ref: 'items'
        },
        amount: {
            type: Number,
            default: 0
        },
        status: {
            type: String,
            default: 'pinjam'
        }
    }],
    date_request: {
        type: Date
    },
    status : {
        type:String, 
        enum:['requested', 'outbound', 'inbound'], 
        default:'requested'
    },
    request_by: {
        type: Schema.Types.ObjectId,
        autopopulate: { select: 'employee_id name role photo position division' },
        ref: 'users'
    },
    pic_by: {
        type: Schema.Types.ObjectId,
        autopopulate: { select: 'employee_id name role photo position division' },
        ref: 'users',
        default: null
    },
});

sch.plugin(timestamp);
sch.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("req_items", sch);