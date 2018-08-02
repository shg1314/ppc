'use strict'

const config = require('../../config/config.js');
const Database = require('../../libs/db/dbManager');

function CompanyService(db){
    this.db = db;
};

CompanyService.prototype.getByName = function (name){
        let sql = "select id, name,comCode,address,contactNumber,email from tb_company where name = ?;";
        //return this.db.excute(sql,[name]);
        return Database.execute(config.maindb, db => 
            {return db.query(sql,[name]);}
       );
    };

CompanyService.prototype.save = function(name,code,address,contactnumber,email){
        let  sql = "insert into tb_company(name,comCode,address,contactNumber,email) values(?,?,?,?,?);";
        //return this.db.excute(sql,[name,code,address,contactnumber,email]);
        return Database.execute(config.maindb, db => db.query(sql,[name,code,address,contactnumber,email]));
    };

CompanyService.prototype.deleteByName = function(name){
    const sql = 'delete from tb_company where name = ?';
    return Database.execute(config.maindb,function(db){
        return db.query(sql,[name]);
    }
    );
};

module.exports = CompanyService;