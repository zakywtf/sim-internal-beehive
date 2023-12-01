const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/inbounds");

const { generate } = require("../helpers/randGen")

const InboundsController = {

    index: async (req, res) => {

        res.render('inbounds/index');
    },
    

    // ==========================================================================================================================================

    
}

module.exports = InboundsController;