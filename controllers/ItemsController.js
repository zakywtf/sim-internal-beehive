const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/items");

const { generate } = require("../helpers/randGen")

const ItemsController = {

    index: async (req, res) => {

        res.render('items/index');
    },
    

    // ==========================================================================================================================================

    
}

module.exports = ItemsController;