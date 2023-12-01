const express = require('express');
const controller = require('../../controllers/AuthController');
const auth = require("../../middlewares/auth");
const { verify } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.post('/login', controller.login);
router.get('/profile', auth, controller.profile);
router.get('/logout', auth, controller.logout);

module.exports = router;