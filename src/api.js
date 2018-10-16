'use strict';

//
// exnternal modules
const express = require('express');
const bodyParser = require('body-parser');

//
// configure microservice with express
const microservice = express();
microservice.use(bodyParser.json());

microservice.get('/', (req, res) => res.send('Hello World!'))

module.exports = microservice;