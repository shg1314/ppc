'use strict'



function CompanyService(db){
    this.db = db;
};

CompanyService.prototype.getByName = function (name){
        let sql = "select id, name,comCode,address,contactNumber,email from tb_company where name = ?;";
        return this.db.query(sql,[name]);
    };

    CompanyService.prototype.save = function(name,code,address,contactnumber,email){
        let  sql = "insert into tb_company(name,comCode,address,contactNumber,email) values(?,?,?,?,?);";
        return this.db.query(sql,[name,code,address,contactnumber,email]);
    };

module.exports = CompanyService;