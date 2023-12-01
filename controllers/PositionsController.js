const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/positions");

const { generate } = require("../helpers/randGen")

const PositionsController = {

    index: async (req, res) => {

        res.render('positions/index');
    },

    create: async (req, res) => {

        res.render('positions/create');
    },
    

    // ==========================================================================================================================================

    
}

module.exports = PositionsController;