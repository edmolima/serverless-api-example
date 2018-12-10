'use strict';

//
// exnternal modules
var https = require('https');
const express = require('express');
const bodyParser = require('body-parser');

const URL = 'https://servicing.com.br/api/v1/onboarding/home_loans/dcd027f8-9684-11e8-851c-7327c0140f59/installments?in_arrears=true'

//
// configure microservice with express
const app = express();
app.use(bodyParser.json());

app.get('/loans', function(req, res) {
  https.request(URL, function(response) {
    response.pipe(res);
  }).on('error', function(e) {
    res.sendStatus(500);
  }).end();
});

app.get('/proxy-example', function(req, res) {
  https.request('https://jsonplaceholder.typicode.com/posts/2', function(response) {
    response.pipe(res);
  }).on('error', function(e) {
    res.sendStatus(500);
  }).end();
});

module.exports = app;
