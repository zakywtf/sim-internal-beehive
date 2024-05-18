const express = require('express');
const controller = require('../../controllers/ItemsController');
// const auth = require("../../middlewares/jwt");
const auth = require("../../middlewares/auth");

const { verify } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.get('/', auth, controller.index);
router.get('/logs', auth, controller.logs);

module.exports = router;