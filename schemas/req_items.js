const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamp = require('./plugins/timestamps');

let sch = new Schema({
    items:[{
        item_id: {
            type: Schema.Types.ObjectId,
            autopopulate: { select: 'code name' },
            ref: 'items'
        },
        quantity: {
            type: Number,
            default: 0
        }
    }],
    user_id: {
        type: Schema.Types.ObjectId,
        autopopulate: { select: 'employee_id name role photo position division' },
        ref: 'users'
    },
});

sch.plugin(timestamp);
sch.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("req_items", sch);