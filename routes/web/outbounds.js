const express = require('express');
const controller = require('../../controllers/OutboundsController');
const auth = require("../../middlewares/auth");
const { verify } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.get('/', controller.index);
router.post('/insert', auth, controller.insert);

module.exports = router;