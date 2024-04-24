const express = require('express');
const controller = require('../../controllers/RequestItemsController');
const auth = require("../../middlewares/auth");
const { verify } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.get('/', auth, controller.index);
router.get('/create', auth, controller.create);
router.post('/insert', auth, controller.insert);
router.get('/detail', controller.detail);

module.exports = router;