const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/announcements");

const { generate } = require("../helpers/randGen")

const AnnouncementsController = {

    index: async (req, res) => {

        res.render('announcements/index');
    },
    

    // ==========================================================================================================================================

    
}

module.exports = AnnouncementsController;