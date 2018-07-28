var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

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


/* 메일전송 _ 문의란 */

router.post("/mailerEnquiry",function(req, res, next) {
  let email = 'csi@ppckorea.com';
  var company = req.body.company1;
  var name = req.body.name;
  var contact_title = req.body.contact_title;
  var contact_email = req.body.email1;
  var phone = req.body.phone;
  var content =`company: ${company} \n name: ${name} \n`;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kissthetour.andy@gmail.com',
      pass: 'andy0501'
    }
  });

  var mailOptions = {
    from: 'kissthetour.andy@gmail.com',
    to: email ,
    subject: '프라임조달컨설팅 홈피의 이메일 문의입니다.',
    text: 'ㅇㄹㅇㄹㄴ'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error) {
      return console.log(error);
    } else {
      consol.log('Email sent:'+ info.response);
    }
  });
  
  res.redirect("/");
})



module.exports = router;
