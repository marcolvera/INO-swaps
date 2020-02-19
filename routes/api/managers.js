const express = require('express');
const router = express.Router();
const managersCtrl = require('../../controllers/managers');

router.post('/managerSignup', managersCtrl.signup);
router.post('/managerLogin', managersCtrl.login);

module.exports = router;