const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/schedules");

const { generate } = require("../helpers/randGen")

const SchedulesController = {

    index: async (req, res) => {
        res.render('schedules/index');
    },
    

    // ==========================================================================================================================================

    
}

module.exports = SchedulesController;