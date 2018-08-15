'use strict'


const config = require('../../config/config.js');
const dbconfig = config.maindb;
const Database = require('../../libs/db/dbManager');
const tbName = 'tb_bid';
const colName = ' id, num, name, ordCount, bidType, isInternational, insttNm, beginDt, clseDt, opengDt '
const moment = require('moment');

function BidService(db){
    this.db = db;
};

function hasWhereClause(obj){
    if(obj == null) return false
    if(isNotEmpty(obj.num)) return true;
    if(isNotEmpty(obj.name)) return true;
    if(isNotEmpty(obj.ordCount)) return true;
    if(isNotEmpty(obj.bidType)) return true;
    if(isNotEmpty(obj.insttNm)) return true;
    if(isNotEmpty(obj.beginDtFrom)) return true;
    if(isNotEmpty(obj.beginDtTo)) return true;
    if(isNotEmpty(obj.clseDtFrom)) return true;
    if(isNotEmpty(obj.clseDtTo)) return true;
    if(isNotEmpty(obj.opengDtFrom)) return true;
    if(isNotEmpty(obj.opengDtTo)) return true;
    return false;
}

function isNotNullAndUndefined(obj){
    if(null === obj) return false;
    if(undefined === obj) return false;
    if( typeof obj === 'undefined' ) return false;
    if(obj === 'undefined') return false;
    return true;
}

function isNotEmpty(val)
{
    if(isNotNullAndUndefined(val)==false) return false;
    if(val === '') return false;
    return true;
}

function getCloseDate(obj){
    let sql = '';

    if(obj.clseDtFrom != '' && obj.clseDtTo != '') 
    {
         sql = " clseDt >= '" + moment(obj.clseDtFrom).format('YYYY-MM-DD').toString() + "' " +
        " and clseDt <= '" +  moment(obj.clseDtTo) .format('YYYY-MM-DD').toString() + "' ";
    }else if(obj.clseDtFrom != '' && obj.clseDtTo == ''){
        sql = " clseDt >= ;" + moment(obj.clseDtFrom).format('YYYY-MM-DD').toString() + "'";
    }else if (obj.clseDtFrom != '' && obj.clseDtTo == ''){
        sql =  "clseDt  <=  '" +  moment(obj.clseDtTo) .format('YYYY-MM-DD').toString() + "'";
    }

    return sql;
}

BidService.prototype.get = function(){
    const sql = 'select ' + colName +  ' from ' + tbName  + ' ;';
    return Database.execute(dbconfig, db => db.query(sql,[]));
}

BidService.prototype.search = function(obj){
    let sql = 'select ' + colName +  ' from ' + tbName;
    if(hasWhereClause(obj)) sql+= ' where ';
    else sql += ' ;';

    sql += getCloseDate(obj);
  // add more 

    return Database.execute(dbconfig, db => db.query(sql,[]));
}

BidService.prototype.getByName = function (name){
    const sql = 'select ' + colName +  ' from ' + tbName  + ' where name = ?;';
        return Database.execute(config.maindb, db => 
            {return db.query(sql,[name]);}
       );
    };

    BidService.prototype.save = function(bid){
        const  sql = 'insert into '  + tbName +  '(num, name, ordCount, bidType, isInternational, insttNm, beginDt, clseDt, opengDt) values(?,?,?,?,?,?,?,?,?);';
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