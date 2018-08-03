'use strict'


const config = require('../../config/config.js');
const Database = require('../../libs/db/dbManager');
const tbName = 'tb_bid';
const colName = ' id, num, name, ordCount, bidType, isInternational, insttNm, beginDt, clseDt, opengDt '


function BidService(db){
    this.db = db;
};

BidService.prototype.getByName = function (name){
        let sql = 'select ' + colName +  ' from ' + tbName  + ' where name = ?;';
        return Database.execute(config.maindb, db => 
            {return db.query(sql,[name]);}
       );
    };

    BidService.prototype.save = function(bit){
        let  sql = 'insert into '  + tbName +  '(num, name, ordCount, bidType, isInternational, insttNm, beginDt, clseDt, opengDt) values(?,?,?,?,?,?,?,?,?);';
        return Database.execute(config.maindb, db => db.query(sql,[
            bit.num,bit.name,bit.ordCount, bit.bidType,bit.isInternational,bit.insttNm,bit.beginDt,bit.clseDt,bit.opengDt]
        ));
    };

    BidService.prototype.deleteByName = function(name){
    const sql = 'delete from ' + tbName +  ' where name = ?';
    return Database.execute(config.maindb,function(db){
        return db.query(sql,[name]);
        }
    );
};

module.exports = BidService;