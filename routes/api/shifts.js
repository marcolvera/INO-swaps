var express = require('express');
var router = express.Router();
var shiftsController = require('../../controllers/shifts');


router.get('/', shiftsController.index);
router.get('/:id', shiftsController.show);
router.post('/', shiftsController.create);
router.post('/:id', shiftsController.delete);


module.exports = router;