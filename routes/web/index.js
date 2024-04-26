const express = require("express");
const router = express.Router();

// WEB ROUTES
// router.use('/subscribe', require('./subscribeRoutes'));
router.use('/auth', require('./auth'));
router.use('/dashboard', require('./dashboard'));
router.use('/positions', require('./positions'));
router.use('/employees', require('./employees'));
router.use('/schedules', require('./schedules'));
router.use('/projects', require('./projects'));
router.use('/items', require('./items'));
router.use('/inbounds', require('./inbounds'));
router.use('/outbounds', require('./outbounds'));
router.use('/chats', require('./chats'));
router.use('/complaints', require('./complaints'));
router.use('/attendances', require('./attendances'));
router.use('/request-leave', require('./requestLeave'));
router.use('/announcements', require('./announcements'));
router.use('/activities', require('./activities'));
router.use('/request-items', require('./requestItems'));
router.use('/scan-items', require('./scanner'));


module.exports = router;