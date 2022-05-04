import nodemailer from 'nodemailer';
const catchAsync = require('../utils/catchAsync');

const sendEmail = catchAsync(async (options: any) => {
  // transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: 'Anthenny de Hoon <process.env.EMAIL_ADDRESS>',
    to: options.email,
    subject: options.subject,
    html: options.message
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

module.exports = sendEmail;
