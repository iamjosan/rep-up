const nodemailer = require("nodemailer");

function sendMail(toEmail, subject, body) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "email@example.com",
      pass: "password"
    }
  });

  const mailOptions = {
    from: "Rep Up <email@example.com>",
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
