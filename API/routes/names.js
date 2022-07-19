var express = require('express');
var router = express.Router();
const namesController = require('../controllers/names.js');

router.get('/', namesController.getNames);
router.post('/', namesController.insertName);


module.exports = router;
