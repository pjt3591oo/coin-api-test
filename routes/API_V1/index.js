var express = require('express');
var coin = require('./coin')

var router = express.Router();

router.use('/data/currency', coin)

module.exports = router;
