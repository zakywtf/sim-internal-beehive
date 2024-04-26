const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/items");

const { generate } = require("../helpers/randGen")

const SchedulesController = {

    index: async (req, res) => {
        res.render('scanner/index3');
    },
    

    // ==========================================================================================================================================

    
}

module.exports = SchedulesController;