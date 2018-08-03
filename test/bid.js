'use strict'

const BidService =  require('../models/bid/BidService.js');
const bid = new BidService();
const colName = ' id, num, name, ordCount, bidType, isInternational, insttNm, beginDt, clseDt, opengDt '
const assert = require('assert');
const newdata  = {num :  '0000-00' , name : '테스트조달1', ordCount :'1', bidType : 'testtype', isInternational : 'N' , insttNm : '나라장터',  beginDt : '2018-08-01',  clseDt : '2018-08-02', opengDt : '2018-08-03'};
const  moment = require('moment');

describe('save',function(){
    before('delete bit',function(){
        bid.deleteByName(newdata.name).then(function(result){
            console.log('bid('  + newdata.name+ ') deleted');
        }).catch(err => console.log(err));
    });

    it('should save new bid', function(){
        try{
        bid.save(newdata).then(function(result){
            assert(1==result.affectedRows);
        }).then(function(){
            bid.getByName(newdata.name).then(function(rows){
                assert(rows.length==1);
                assert(rows[0].name == newdata.name);
                assert(rows[0].num == newdata.num);
                assert(rows[0].ordCount == newdata.ordCount);
                assert(rows[0].bidType == newdata.bidType);
                assert(rows[0].isInternational == newdata.isInternational);

                let retdate = moment(rows[0].beginDt).format('YYYY-MM-DD');
                let mydate = moment(newdata.beginDt).format('YYYY-MM-DD');
                assert(retdate == mydate);
                retdate = moment(rows[0].clseDt).format('YYYY-MM-DD');
                mydate = moment(newdata.clseDt).format('YYYY-MM-DD');

                assert(retdate == mydate);
                retdate = moment(rows[0].opengDt).format('YYYY-MM-DD');
                mydate = moment(newdata.opengDt).format('YYYY-MM-DD');
                assert(retdate == mydate);
            });
        }).catch(function(err){
            console.log('test err');
            console.log(err);
        });
    }catch(err){
        console.log(err);
    }
}
);
}
);