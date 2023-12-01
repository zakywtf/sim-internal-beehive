const express = require('express');
const controller = require('../../controllers/ProjectsController');
const auth = require("../../middlewares/auth");
const { verify } = require("../../middlewares/authMiddleware");
const router = express.Router();
const fileupload = require("express-fileupload")

router.use(fileupload())
router.get('/', auth, controller.index);
router.get('/detail', auth, controller.detail);
router.get('/task', controller.tasks);
router.get('/documentation', auth, controller.documentation);
router.post('/insert', auth, controller.insert);
router.post('/tickets/insert', auth, controller.insert_tickets);
router.get('/tickets/done', auth, controller.done_tickets);

module.exports = router;