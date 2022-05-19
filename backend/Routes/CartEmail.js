const express = require("express");
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/cart',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        secureConnection: false, 
        port: 587, 
        tls: {
        ciphers:'SSLv3'
        },
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD
        }
    });
 
    var mailOptions = {
        from: process.env.MAIL_FROM,
        to: "pamithaa19@gmail.com", 
        subject: req.body.subject, 
        email: req.body.email,
        text:req.body.description,
        html: `
        <div style="padding:10px;border-style: ridge">
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Email: ${req.body.to}</li>
            <li>Subject: ${req.body.subject}</li>
            <li>Sender Email: ${req.body.email}</li>
            <li>Message: ${req.body.description}</li>
        </ul>
        `
    };
     
    transporter.sendMail(mailOptions, function(error, info){
      
        if (error)
        {
          console.log(error);
          res.json({status: true, respMesg: 'Email Sent is not Successful'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});

module.exports = router;