'use strict'

var express = require('express');
var router = express.Router();

router.use('/user', require('./routes/userRoute'));

module.exports = router;