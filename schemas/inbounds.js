const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamp = require('./plugins/timestamps');

let sch = new Schema({
    item_id: {
        type: Schema.Types.ObjectId,
        autopopulate: { select: 'code name serial_number' },
        ref: 'items'
    },
    amount: {
        type: Number,
        default: 0
    },
    request_item_id: {
        type: Schema.Types.ObjectId,
        autopopulate: true,
        ref: 'req_items'
    },
});

sch.plugin(timestamp);
sch.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("inbounds", sch);