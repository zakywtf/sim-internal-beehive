const express = require('express');
const controller = require('../../controllers/ComplaintsController');
// const auth = require("../../middlewares/jwt");
const { verify } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.get('/inbounds', controller.inbounds);
router.get('/outbounds', controller.outbounds);

module.exports = router;