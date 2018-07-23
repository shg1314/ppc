'use strict'

var config = require('../../config/config.js'); 
var db = require('../../libs/db/dbManager')(config.maindb);

function UserMapper()
{
}

UserMapper.prototype.getByEmailAndPwd = function(email, password, fn ){
    var sql = "select id,name, email ,role from tb_user where email=? and password=? ;";
    db.query(sql, [email,password],fn);
};

module.exports = UserMapper;

