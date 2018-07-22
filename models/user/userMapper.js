
'use strict'

var config = require('../../config/config.js'); 
var mysql = require('MySQL');
//var db = mysql.createConnection(config.maindb);
var pool = mysql.createPool(config.maindb);


function userMapper()
{

}
