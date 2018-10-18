'use strict';

// external modules
const awsServerlessExpress = require('aws-serverless-express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// app
const app = require('./api');
app.use(awsServerlessExpressMiddleware.eventContext());

// exposed app
const appServer = awsServerlessExpress.createServer(app);

module.exports.app = (event, context) => awsServerlessExpress.proxy(appServer, event, context);
