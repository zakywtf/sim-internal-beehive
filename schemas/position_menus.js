const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamp = require('./plugins/timestamps');

let sch = new Schema({
    position_id: {
        type: Schema.Types.ObjectId,
        autopopulate: { select: 'code name' },
        ref: 'positions'
    },
    menus: {
        type: Array
    },
});

sch.plugin(timestamp);
sch.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("position_menus", sch);