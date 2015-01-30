/* jshint node:true */
"use strict";

module.exports = {
  db:       process.env.MONGOLAB_URI,
  port:     80,
  logLevel: "error",
  mailChimp: {
    key: process.env.CHIMP_KEY,
    userList: process.env.CHIMP_USERLIST
  }
};