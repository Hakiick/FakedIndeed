const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;


// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com', // Hotmail's SMTP server
  port: 587, // Port number for secure TLS
  secure: false, // Set to false for other ports
  auth: {
    user: 'maximepitech@outlook.com',
    pass: 'epitechtest-',
  },
});

app.get('/send-email', (req, res) => {
  // Email content
  const mailOptions = {
    from: 'maximepitech@outlook.com',
    to: 'maxepitech@outlook.com',
    subject: 'new company is ',
    text: 'Your email content goes here.',
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      res.status(500).json({ message: 'Email not sent' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
