const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/items");
const Inbounds = require("../schemas/inbounds");
const Outbounds = require("../schemas/outbounds");

const { generate } = require("../helpers/randGen")
var QRCode = require('qrcode')

const ItemsController = {

    index: async (req, res) => {
        const datas = []
        var resp = await Schema.find({}).sort({ created_at: 1 })
        
        for (let i = 0; i < resp.length; i++) {
            const e = resp[i];
            const qr = await QRCode.toDataURL(e.code)
            var obj = { ...e._doc, qr: qr }
            datas.push(obj)
        }

        res.render('items/index', { datas });
    },

    logs: async (req, res) => {
        const datas = []

        var inbounds = await Inbounds.find({item_id: req.query.id})
        var outbounds = await Outbounds.find({item_id: req.query._id})

        console.log({inbounds, outbounds})
        for (let i = 0; i < inbounds.length; i++) {
            const e = inbounds[i];
            datas.push({...e._doc, status: 'inbound'})
        }
        for (let ii = 0; ii < outbounds.length; ii++) {
            const e = outbounds[ii];
            datas.push({...e._doc, status: 'outbound'})
        }
        // const datas = inbounds.concat(outbounds)
        datas.sort(function(a,b){
            return new Date(b.created_at) - new Date(a.created_at);
        });
        console.log({datas})

        res.render('items/logs', { datas });

    }
    

    // ==========================================================================================================================================

    
}

module.exports = ItemsController;