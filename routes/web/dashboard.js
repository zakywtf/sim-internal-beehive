const express = require('express');
const controller = require('../../controllers/DashboardController');
const auth = require("../../middlewares/auth");
const { verify } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.get('/', auth, controller.index);
router.post('/create/clock_in', auth, controller.clock_in);
router.get('/create/clock_out', auth, controller.clock_out);
router.get('/create/break', auth, controller.break);

module.exports = router;