const express = require('express');
const router = express.Router();
const managersCtrl = require('../../controllers/managers');

router.post('/signup', managersCtrl.signup);
router.post('/login', managersCtrl.login);

module.exports = router;