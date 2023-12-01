const express = require('express');
const controller = require('../../controllers/InboundsController');
// const auth = require("../../middlewares/jwt");
const { verify } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.get('/', controller.index);

module.exports = router;