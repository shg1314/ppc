'use strict'

const request = require('request');

exports.list = function (req,res){
    res.render('bidList',{title : '입찰검색 결과'});
}