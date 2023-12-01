const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/complaints");

const { generate } = require("../helpers/randGen")

const ComplaintsController = {

    inbounds: async (req, res) => {

        res.render('complaints/inbounds');
    },

    outbounds: async (req, res) => {

        res.render('complaints/outbounds');
    },
    

    // ==========================================================================================================================================

    
}

module.exports = ComplaintsController;