const express = require('express');
const controller = require('../../controllers/RestockItemsController');
const auth = require("../../middlewares/auth");
const { verify } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.get('/', auth, controller.index);

module.exports = router;