const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/restock_items");
const Items = require("../schemas/items");
const Inbounds = require("../schemas/inbounds");
const Outbounds = require("../schemas/outbounds");

const { generate } = require("../helpers/randGen")
var QRCode = require('qrcode')

const RestockItemsController = {

    index: async (req, res) => {
        const datas = []
        var resp = await Schema.find({}).sort({ created_at: 1 })

        res.render('restock-items/index', { datas });
    },
    

    // ==========================================================================================================================================

    
}

module.exports = RestockItemsController;