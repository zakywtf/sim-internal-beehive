const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/req_items");

const { generate } = require("../helpers/randGen")

const ReqItemsController = {

    index: async (req, res) => {

        res.render('request-items/index');
    },
    

    // ==========================================================================================================================================

    
}

module.exports = ReqItemsController;