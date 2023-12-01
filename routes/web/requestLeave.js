const express = require('express');
const controller = require('../../controllers/EmployeesController');
// const auth = require("../../middlewares/jwt");
const { verify } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.get('/', controller.reqLeave);

module.exports = router;