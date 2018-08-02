var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prime Procurement' });
});

/*GET bid-list page.*/
router.get('/bidList', function(req, res, next) {
  res.render('bidList', { title: 'Prime Procurement' });
});

/*GET bid-detail page.*/
router.get('/bidDetail', function(req, res, next) {
  res.render('bidDetail', { title: 'Prime Procurement' });
});

/*GET analysis page.*/
router.get('/analysis', function(req, res, next) {
  res.render('analysis', { title: 'Prime Procurement' });
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

/*GET partner enquiry popup.*/
router.get('/partner_enquiry', function(req, res, next) {
  res.render('partner_enquiry', { title: 'Prime Procurement' });
});

/*GET partner enquiry Success popup.*/
router.get('/partner_enquirySuccess', function(req, res, next) {
  res.render('partner_enquirySuccess', { title: 'Prime Procurement' });
});

/*GET enquiry popup.*/
router.get('/enquiryPopup', function(req, res, next) {
  res.render('enquiryPopup', { title: 'Prime Procurement' });
});

/*GET enquiry Success popup*/
router.get('/enquiryPopupSuccess', function(req, res, next) {
  res.render('enquiryPopupSuccess', { title: 'Prime Procurement' });
});

/* 분석 서비스 팝업창 문의 : service.ejs */

router.post("/mailerEnquiry",function(req, res, next) {
  var email = 'csi@ppckorea.com';
  var company1 = req.body.company1;
  var name = req.body.name;
  var contact_title = req.body.contact_title;
  var contact_email = req.body.email1;
  var phone = req.body.phone;
  var enquiry_area = req.body.enquiry_area;
  var enquiry_textarea = req.body.enquiry_textarea;
  var content =`회사: ${company1} \n 직함: ${contact_title} \n 담당자: ${name}  \n 이메일 ${contact_email}  \n 전화번호: ${phone} \n 관심분야: ${enquiry_area}  \n 문의 상세내용: ${enquiry_textarea}`;

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
  
  res.redirect("/enquiryPopupSuccess");
})

/*제휴 문의하기 팝업창 :partner_enquiry.ejs*/

router.post("/partnerEnquiry",function(req, res, next) {
  var email = 'csi@ppckorea.com';
  var partner_select = req.body.partner_select;
  var partner_name = req.body.partner_name;
  var partner_email = req.body.partner_email;
  var partner_phone = req.body.partner_phone;
  var partner_title = req.body.partner_title;
  var partner_textarea = req.body.partner_textarea;
  var content =`구분: ${partner_select} \n 작성자: ${partner_name} \n 연락처: ${partner_phone}  \n 이메일 ${partner_email}  \n 제목: ${partner_title} \n 내용: ${partner_textarea}`;

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
    subject: '프라임조달컨설팅 홈피의 사업 제휴 문의입니다.',
    text: content
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error) {
      return console.log(error);
    } else {
      consol.log('Email sent:'+ info.response);
    }
  });
  
  res.redirect("/partner_enquirySuccess");
})

module.exports = router;
