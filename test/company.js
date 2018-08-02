'use strict'

let CompanyService =  require('../models/company/CompanyService.js');
let DBManager =  require('../libs/db/dbManager.js');
const config = require('../config/config.js');
let db = new DBManager(config.maindb);
let com = new CompanyService(db);

var assert = require('assert');

const newcom = {name : 'unittest', code :'testcomcode', address : 'testaddress', number : '123456789-1234' ,email : 'test@test.com'};


describe('save',function(){
    before('delete company',function(){
        com.deleteByName(newcom.name).then(function(result){
            console.log('company('  + newcom.name+ ') deleted');
        }).catch(err => console.log(err));
    });

    it('should save new company', function(){
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