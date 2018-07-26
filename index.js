var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prime Procurement' });
});

/*GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Prime Procurement' });
});

/*GET bid-list page.*/
router.get('/bidList', function(req, res, next) {
  res.render('bidList', { title: 'Prime Procurement' });
});

/*GET analysis page.*/
router.get('/analysis', function(req, res, next) {
  res.render('analysis', { title: 'Prime Procurement' });
});

/*GET csCenter page.*/
router.get('/csCenter', function(req, res, next) {
  res.render('csCenter', { title: 'Prime Procurement' });
});

module.exports = router;
