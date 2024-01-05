require('dotenv').config();
const ejs = require('ejs');
const sgMail = require('@sendgrid/mail');
const path = require('path');

const sendMail = async(options)=>{
    sgMail.setApiKey(process.env.EXPRESS_SENDGRID_API_KEY);
    const { email, subject, template, data } = options;
    const templatePath = path.join(__dirname, "../mails", template);
    const html = await ejs.renderFile(templatePath, data);
    const message = {
        from: {
            name: process.env.EXPRESS_SENDGRID_OWNER,
            email: process.env.EXPRESS_SENDGRID_EMAIL,
        },
        to: email,
        subject,
        html
    };
    await sgMail.send(message)
}

module.exports = sendMail;