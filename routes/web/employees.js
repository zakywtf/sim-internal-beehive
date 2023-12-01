const express = require('express');
const controller = require('../../controllers/EmployeesController');
const auth = require("../../middlewares/auth");
const { verify } = require("../../middlewares/authMiddleware");
const router = express.Router();
const fileupload = require("express-fileupload")

router.use(fileupload())

router.get('/', auth, controller.index);
// router.get('/attendance', controller.index);
router.get('/detail', auth, controller.detail);
router.get('/attendance', auth, controller.attendance);
router.get('/create', auth, controller.create);
router.post('/insert', auth, controller.insert);

module.exports = router;