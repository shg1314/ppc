'use strict'

var config = require('../../config/config.js'); 
var mysql = require('promise-mysql');
var db = new require('dbManger-Promise');
var pool = mysql.createpool(config.maindb);

function UserService(){

}

UserService.prototype.getByEmailAndPwd = function(email,pwd){
    var sql = 'select id, name,email,role where email = ? and pwd = ?';
    var promise = db.query(sql,[email,pwd]);
    promise.then();

}


