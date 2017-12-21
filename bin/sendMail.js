const nodemailer = require("nodemailer");

function sendMail(toEmail, subject, body) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "repup.help@gmail.com",
      pass: "Sage2017#!ru"
    }
  });

  const mailOptions = {
    from: "Rep Up <repup.help@gmail.com>",
    to: toEmail,
    subject: subject,
    html: body
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    console.log(info);
  });
}

module.exports = sendMail;
