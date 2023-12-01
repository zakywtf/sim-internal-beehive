const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/chats");

const { generate } = require("../helpers/randGen")

const ChatsController = {

    index: async (req, res) => {

        res.render('chats/index');
    },
    

    // ==========================================================================================================================================

    
}

module.exports = ChatsController;