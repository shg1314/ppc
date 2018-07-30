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

/*GET service page.*/
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Prime Procurement' });
});

/*GET QnA page.*/
router.get('/qna', function(req, res, next) {
  res.render('qna', { title: 'Prime Procurement' });
});

/*GET partner page.*/
router.get('/partner', function(req, res, next) {
  res.render('partner', { title: 'Prime Procurement' });
});


/* 메일전송_분석 서비스 문의 : service.ejs */

router.post("/mailerEnquiry",function(req, res, next) {
  var email = 'csi@ppckorea.com';
  var company1 = req.body.company1;
  var name = req.body.name;
  var contact_title = req.body.contact_title;
  var contact_email = req.body.email1;
  var phone = req.body.phone;
  var enquiry_area = req.body.enquiry_area;
  var enquiry_textarea = req.body.enquiry_textarea;
  var content =`회사: ${company1} \n 직함: ${contact_title} \n 담당자: ${name}  \n 이메일 ${contact_email}  \n 전화번호: ${phone} \n 관심분야: ${enquiry_area}  \n 문의 상세내용: ${enquiry_textarea}}`;

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
    text: content
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error) {
      return console.log(error);
    } else {
      consol.log('Email sent:'+ info.response);
    }
  });
  
  res.redirect("/service");
})

module.exports = router;
