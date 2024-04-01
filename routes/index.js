const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/IndexController');
// const PositionsController = require('../controllers/PositionsController');
// const EmployeesController = require('../controllers/EmployeesController');
// const SchedulesController = require('../controllers/SchedulesController');
// const ProjectsController = require('../controllers/ProjectsController');

// Routes Webapp
router.get('/', IndexController.index);
// router.get('/dashboard', IndexController.dashboard);
// router.get('/positions', PositionsController.index);
// router.get('/employees', EmployeesController.index);
// router.get('/schedules', SchedulesController.index);
// router.get('/projects', ProjectsController.index);


// Routes Test
router.get('/ping', IndexController.ping);
router.get('/scanner', IndexController.scanner);
router.post('/test', IndexController.testJson);
router.get('/rand-string', IndexController.randString);
// router.get('/payment', IndexController.testPayment);
router.get('/contact_us', IndexController.contactUs);
router.get('/email-test', IndexController.testSendEmail);


// Routes Prefixes / API
router.use('/api/v1', require('./api/index'));

// Routes Web
router.use('/web/v1', require('./web/index'));


module.exports = router;
