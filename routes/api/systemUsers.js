var express = require('express');
var router = express.Router();
var systemUsersController = require('../../controllers/systemUsers');

router.get('/', systemUsersController.index);

module.exports = router;