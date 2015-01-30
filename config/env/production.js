/* jshint node:true */
"use strict";

module.exports = {
  db:       process.env.MONGOLAB_URI,
  port:     process.env.PORT || '3000',
  logLevel: process.env.LOG_LEVEL || 'error',
  mailChimp: {
    key: process.env.CHIMP_KEY,
    userList: process.env.CHIMP_USERLIST
  }
};