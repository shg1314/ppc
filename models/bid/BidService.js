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

    BidService.prototype.save = function(bid){
        let  sql = 'insert into '  + tbName +  '(num, name, ordCount, bidType, isInternational, insttNm, beginDt, clseDt, opengDt) values(?,?,?,?,?,?,?,?,?);';
        return Database.execute(config.maindb, db => db.query(sql,[
            bid.num,bid.name,bid.ordCount, bid.bidType,bid.isInternational,bid.insttNm,bid.beginDt,bid.clseDt,bid.opengDt]
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