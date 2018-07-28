'use strict'

var config = require('../../config/config.js'); 
var mysql = require('promise-mysql');

ool = mysql.createPool(config.maindb);
   
  function getSqlConnection() {
    return pool.getConnection().disposer(function(connection) {
      pool.releaseConnection(connection);
    });
  }
   
  module.exports = getSqlConnection;
