const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()
//https://www.youtube.com/watch?v=tDjTun-_ZTU- this channel helped me with nodemailer
let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth:{
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD
    }

})


const sendEmail = async (req, res) =>{
   const {firstName, lastName, email, message, phoneNumber, subject} = req.body

   let mailOptions ={
    from: process.env.SMTP_MAIL,
    to: email,
    text: `From ${email}\nPhone Number: ${phoneNumber}\nName: ${firstName} ${lastName}\nMessage: ${message}`,
    subject: subject

   }

   

 transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
        console.log(error)
    }else{
        console.log('Email Sent Successfully')
    }
   })
   
}

module.exports = {sendEmail}