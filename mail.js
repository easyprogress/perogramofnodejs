const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
       host: 'smtp.mailtrap.io',
       port: 587,
       auth: {
           user: "neha.gupta@emagia.com",
           pass: ""
       }
})
message = {
    from: "neha.gupta@emagia.com",
    to: "neha.gupta@emagia.com",
    subject: "neha",
    text: "Hello SMTP Email"
}
transporter.sendMail(message,function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
})

