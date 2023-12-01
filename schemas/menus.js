const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamp = require('./plugins/timestamps');

let sch = new Schema({
    name: {
        type: String,
        default: null
    },
    routes: {
        type: String,
        default: '#'
    },
    isSubMenu: {
        type: Boolean,
        default: false
    },
    sub_menus: [
        {
            name: {
                type: String,
            },
            routes: {
                type: String
            },
        }
    ]
});

sch.plugin(timestamp);
sch.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("positions", sch);