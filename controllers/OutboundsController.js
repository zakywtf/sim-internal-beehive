const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/outbounds");

const { generate } = require("../helpers/randGen")

const OutboundsController = {

    index: async (req, res) => {

        res.render('outbounds/index');
    },
    

    // ==========================================================================================================================================

    
}

module.exports = OutboundsController;