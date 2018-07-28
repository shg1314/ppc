'use strict'

let CompanyService =  require('../models/company/CompanyService.js');
let DBManager =  require('../libs/db/dbManger-Promise.js');
let db = new DBManager;
let com = new CompanyService(db);

var assert = require('assert');

describe('save',function(){
    before('delete all user',function(){
        //com.deleteAll(function(err,result){
         //   if(err) throw err;
        //});
    });

    it('should save new company', function(){
        var newcom = {name : 'unittest', code :'testcomcode', address : 'testaddress', number : '123456789-1234' ,email : 'test@test.com'};

        com.save(newcom.name,newcom.code,newcom.address, newcom.number,newcom.email).then(function(result){
            assert(1==result.affectedRows);
            
        }).then(function(){
            com.getByName(newcom.name).then(function(rows){
                assert(rows.length==1);
                assert(rows[0].name == newcom.name);
                assert(rows[0].email == newcom.email);
                db.close();
            });
        }).catch(function(err){
            console.log(err);
        });

       
    });
}
);