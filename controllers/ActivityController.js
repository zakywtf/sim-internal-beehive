const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/schedules");

const { generate } = require("../helpers/randGen")

const ActivityController = {

    index: async (req, res) => {
        res.render('activities/index');
    },
    

    // ==========================================================================================================================================

    
}

module.exports = ActivityController;