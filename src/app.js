'use strict'

const apiResponse = require("./helpers/apiResponse");
const dotenv = require('dotenv');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const rfs = require('rotating-file-stream');
const tokenValidator = require('./middlewares/tokenValidator');
const bearerToken = require('express-bearer-token');

//clientApp for client clientApp
const clientApp = new express();

(() => {
    const result = dotenv.config();
    if (result.error) {
        throw result.error;
    }
})();

const logDirectory = 'logs';
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
const accessLogStream = rfs('api_access.log', {
    interval: '1d', // rotate daily
    path: logDirectory
})

// setup the logger
clientApp.use(morgan('combined', {
    stream: accessLogStream
}))

// for parsing the body
clientApp.use(bodyParser.urlencoded({
    extended: false
}));

clientApp.use(bodyParser.json());
clientApp.use(cookieParser());
clientApp.use(express.static(path.join(__dirname, 'public')));

//clientApp.use(bearerToken());//It manages the token variable in request
//clientApp.use(tokenValidator);//It manages the token variable in request

clientApp.use('/client-app/api/v1', require('./api_modules/client_app/moduleRouter'));
//error handler
clientApp.use((err, req, res, next) => {
    if (err) {
        apiResponse.sendJson(req, res, 500, err.message);
    }
})

module.exports = {
    clientApp: clientApp
};