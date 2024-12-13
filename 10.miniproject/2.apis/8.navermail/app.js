const express = require('express');
const morgan = require('morgan');
const randomstring = require('randomstring');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.post('/signup', (req,res) => {
    const email = req.body.email;
    const verifyCode = generateVerificationCode();

    console.log(verifyCode);
    Database.users.push({ email:email, code:verifyCode });

    const mailOptions = {
        from: process.env.NAVER_EMAIL,
        to: process.env.SENDTO_EMAIL,
        subject: '[새싹] 회원가입 인증코드',
        text: `회원가입 코드: ${verifyCode}`,
    };

    //메일 발송
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({message: '이메일 발송 중 오류가 발생했습니다.'});
        } else {
            console.log('이메일 전송 성공: ', info.response);
            res.json({message: '이메일로 인증코드가 발송되었습니다.'});
        }
    })
})

app.listen(PORT, () => {
    console.log(`서버 ${PORT}번 포트에서 실행`);
})