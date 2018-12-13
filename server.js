const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const nodemailer = require('nodemailer');
var path = require("path");
var dotenv = require('dotenv');
dotenv.load();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // why true? nodemailing vid had false
app.use(express.static(__dirname + '/client/public'));

app.get('/', (req, res) => {
  res.sendFile('./index.html');
});

app.post('/api/form', (req, res) => {
  console.log(req.body);

  nodemailer.createTestAccount((err,account) => {
    const htmlEmail= `
      <h3>Contact Details </h3>
      <ul>
        <li> Name: ${req.body.name}</li>
        <li> Email: ${req.body.email}</li>
        <li> Contact: ${(req.body.rSelected === 1 )? "phone":"email"}</li>
      </ul>
      <h3> System Type: </h3>
      <p> ${req.body.systemType}</p>
    `
    console.log()
    console.log("process.env.EMAIL = ", process.env.EMAIL);

    let transporter = nodemailer.createTransport({
      host: 'smtp.outlook.com',
      port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      }
    })

    let mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      replyTo: process.env.EMAIL,
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail 
    }

    transporter.sendMail(mailOptions, (error, info)=> {
      if (error){
        return console.log(error);
      }
      console.log('INFO: ', info)
      console.log('Message sent: %s ', info.message);
      console.log('Message URL: %s ', nodemailer.getTestMessageUrl(info));
    })

  });

});

app.listen(port, () => console.log(`Listening on port ${port}`));
