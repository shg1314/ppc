'use strict'

var mysql = require('MySQL');

function DBManager(sqlconnectionString)
{
    this.pool = mysql.createPool(sqlconnectionString);
}

DBManager.prototype.connect = function(){
    this.pool.getConnection(function(err,connection){
        if(err){
            if(connection) 
                connection.release();
               throw err;
           }
    });
};


DBManager.prototype.query = function (sqlquery, arrVal,fn ){
    this.pool.query(sql,arrVal,fn);
};

DBManager.prototype.close = function (){
     if(this.connection) 
         this.connection.release();
};

module.exports = DBManager;