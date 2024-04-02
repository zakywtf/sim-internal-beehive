const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamp = require('./plugins/timestamps');

let sch = new Schema({
    password: {
        type: String,
        default: null
    },
    employee_id: {
        type: String,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    phone: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    place_of_birth: {
        type: String,
        default: null
    },
    date_of_birth: {
        type: Date,
        default: null
    },
    gender: {
        type:String, 
        enum:['male', 'female'], 
        default:'male'
    },
    religion: {
        type: String,
        default: null
    },
    // position_id: {
    //     type: Schema.Types.ObjectId,
    //     autopopulate: { select: 'code name department' },
    //     ref: 'positions'
    // },
    position: {
        type: String,
        default: null
    },
    division: {
        type: String,
        default: null
    },
    jobdesc: {
        type: String,
        default: null
    },
    company: {
        type: String,
        default: null
    },
    photo: {
        type: String,
        default: "avatar_default.png"
    },
    family_card_id: {
        type: String,
        default: null
    },
    national_id: {
        type: String,
        default: null
    },
    join_date: {
        type: Date,
        default: null
    },
    last_education: {
        type: String,
        default: null
    },
    major: {
        type: String,
        default: null
    },
    employee_status: {
        type: String,
        default: null
    },
    bpjs_kesehatan_id: {
        type: String,
        default: null
    },
    bpjs_ketenagakerjaan_id: {
        type: String,
        default: null
    },
    account_bni: {
        type: String,
        default: null
    },
    status : {
        type:String, 
        enum:['active', 'inactive'], 
        default:'active'
    },
    role: {
        type:String, 
        enum:['developer', 'freelance', 'staff', 'hrd', 'pm', 'finance', 'director', 'marketing', 'sales', 'ceo', 'coo', 'cto', 'inventory'], 
        default:'staff'
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    online: {
        status: {
            type:String, 
            enum:['offline', 'online'], 
            default:'offline'
        },
        last_update: {
            type: Date
        }
    },
    deleted_at: {
        type: Date
    }
});

sch.plugin(timestamp);
sch.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("users", sch);