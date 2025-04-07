const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
app.use(bodyparser.json());

const port = process.env.PORT || 3000;
// app.get('/name',(req,res)=>{
    //for to post on console
//    // console.log("priyanshi");
//    //to post on postman
//    res.send("priyanshi");
//})

// app.post('/submit',(req,res)=>{

// var name = req.body.name;
// res.send(name);
  
// })

// app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vidhansharma84@gmail.com',
      pass: 'ylkckjkkwhgnfjfk'
    }});

 app.post('/submit', (req, res) => {
   const { email, message } = req.body;

   // Create a nodemailer transporter
   
   const mailData = {
     from: 'vidhansharma84@gmail.com',
     to: "priyanshayyy@gmail.com",
     subject: 'Your Subject',
     text: "this is somehting related to demo testing of the email amiler nodejhs",
     
   };

  
   transporter.sendMail(mailData, (error, info) => {
     if (error) {
       console.log(error);
       res.status(500).json({ status: 'error', message: 'Email sending failed.' });
     } else {
       console.log('Email sent: ' + info.response);
       res.json({ status: 'success', message: 'Email sent successfully.' });
     }
   });
});

app.listen(port, () => {
  console.log(`Server is running on port `,port);
});
