const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/users.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/getUsers', user_controller.getUsers);
// router.post('/sign-in', user_controller.login);
// router.post('/sign-up', user_controller.register);
module.exports = router;