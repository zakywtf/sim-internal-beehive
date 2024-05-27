const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamp = require('./plugins/timestamps');

let sch = new Schema({
    form_number: {
        type: String
    },
    ref_id: {
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
        }
    }],
    date_check: {
        type: Date
    },
    notes: {
        type: String
    },
    created_by: {
        type: Schema.Types.ObjectId,
        autopopulate: { select: 'employee_id name role photo position division' },
        ref: 'users',
        default: null
    },
});

sch.plugin(timestamp);
sch.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("restock_items", sch);