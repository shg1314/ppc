'use strict'

const request = require('request');
const BidService = require('../models/bid/BidService');
const moment = require('moment');
exports.list = function (req,res){
    let bid = new BidService();
   bid.get().then(function(result){
        for(let i = 0 ; i < result.length; i ++){
            result[0].clseDt = moment(result[0].clseDt).format('YYYY-MM-DD');
        }
        res.render('bidList',{title : '입찰검색 결과', bidlist : result});
    }).catch(function(err){
        console.log(err);
    });
}

exports.search = function (req,res){
    let bid = new BidService();
   
    let bidSearch = { clseDtFrom : req.query.clseDtFrom, clseDtTo : req.query.clseDtTo  };
   bid.search(bidSearch).then(function(result){
        for(let i = 0 ; i < result.length; i ++){
            result[0].clseDt = moment(result[0].clseDt).format('YYYY-MM-DD');
        }
        res.render('bidList',{title : '입찰검색 결과', bidlist : result});
    }).catch(function(err){
        console.log(err);
    });
}

exports.bidDetail = function(req,res){
    let bid = new BidService();
    let num = {num : req.query.num};
    

}