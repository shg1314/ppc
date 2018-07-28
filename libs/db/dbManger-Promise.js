'use strict'

var config = require('../../config/config.js'); 
var mysql = require('promise-mysql');

function DBManager()
{
    //this.pool = mysql.createPool(config.maindb);
    this.connection = null;
}
let connection = null;
DBManager.prototype.query = function (sqlquery, arrVal ){
    let that = this;
    if(connection!=null)
      return connection.query(sqlquery,arrVal);
    else return mysql.createConnection(config.maindb).then(function(con) {
        connection = con;
        return con.query(sqlquery,arrVal);
    });
};

DBManager.prototype.close = function (){
     if(connection) 
    {
             connection.end();
    }
    else {
        console.log('no db conection');
    }
};

module.exports = DBManager;