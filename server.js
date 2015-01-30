/* jslint node:true */
'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var
  express = require('./config/express'),
  mongoose  = require('./config/mongoose'),
  config   =require('./config/config')
  app = express(mongoose())
;

app.listen(config.port, function() {
    console.log('HTTP Server running on port: ' + config.port);
    console.log('Running in environment: ' + process.env.NODE_ENV);
});

module.exports = app;