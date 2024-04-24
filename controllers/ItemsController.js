const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/items");

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
    

    // ==========================================================================================================================================

    
}

module.exports = ItemsController;