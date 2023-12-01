const express = require('express');
const controller = require('../../controllers/PositionsController');
// const auth = require("../../middlewares/jwt");
const { verify } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.get('/', controller.index);
router.get('/create', controller.create);

module.exports = router;