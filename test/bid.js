'use strict'

let BidService =  require('../models/bid/BidService.js');
//let DBManager =  require('../libs/db/dbManager.js');
let bid = new BidService();
const colName = ' id, num, name, ordCount, bidType, isInternational, insttNm, beginDt, clseDt, opengDt '
var assert = require('assert');

const newdata  = {num :  '0000-00' , name : '테스트조달1', ordCount :'1', bitType : 'testtype', isInternational : 'N' ,insttNm : '나라장터', beginDt : '2018-08-01', clseDt : '2018-08-02',opengDt : '2018-08-03'};


describe('save',function(){
    before('delete bit',function(){
        bid.deleteByName(newdata.name).then(function(result){
            console.log('bid('  + newdata.name+ ') deleted');
        }).catch(err => console.log(err));
    });

    it('should save new bid', function(){
        bid.save(newdata).then(function(result){
            assert(1==result.affectedRows);
        }).then(function(){
            bid.getByName(newdata.name).then(function(rows){
                assert(rows.length==1);
                assert(rows[0].name == newdata.name);
                assert(rows[0].num == newdata.num);
            });
        }).catch(function(err){
            console.log(err);
        });
    });
}
);