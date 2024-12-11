require('dotenv').config();
const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

const CLIENT_ID = process.env.NAVER_CLIENT_ID;
const CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;
const REDIRECT_URL = 'http://localhost:3000/callback';

//네이버 로그인 URL
const NAVER_AUTH_URL = 'https://nid.naver.com/oauth2.0/authorize';
const NAVER_TOKEN_URL = 'https://nid.naver.com/oauth2.0/token';
const NAVER_USERINFO_URL = 'https://openapi.naver.com/v1/nid/me';

// 미들웨어
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(session({
    secret: 'my-secret-key-1234',
    resave: false,
    saveUninitialized: true
}));

// 로그인 요청
app.get('/login', (req, res) => {
    //네이버로 가라고 한다
    const state = Math.random().toString(36).substring(7);
    console.log(state);

    const authUrl = `${NAVER_AUTH_URL}?response_type=code&client_id=${CLIENT_ID}&redirect_url=${REDIRECT_URL}&state=${state}`

    console.log(authUrl);
    res.redirect(authUrl);
});

app.get('/callback', async (req, res) => {
    // 인증 끝나고 돌아왔다. (token을 기반으로 내가 할일을 한다)
    // token 인증
    const { code, state } = req.query;
    const tokenResponse = await axios.get(NAVER_TOKEN_URL, {
        params: {
            grant_type: 'authorization_code',
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_url: REDIRECT_URL,
            code: code,
            state: state,
        }
    });
    const accessToken = tokenResponse.data.access_token;
    // res.send(`로그인 성공: ${accessToken}`);

    const userInfoResponse = await axios.get(NAVER_USERINFO_URL, {
        headers : {
            Authorization: `Bearer ${accessToken}`, //가장 일반적인 규약
        }
    });

    const userInfo = userInfoResponse.data.response;

    const additionalUserInfo = {
        nickname: userInfo.nickname || '미동의',
        gender: userInfo.gender || '미동의',
        email: userInfo.email || '미동의',
        age: userInfo.age || '미동의',
        birthyear: userInfo.birthyear || '미동의',
        birthday: userInfo.birthday || '미동의',
    }
    console.log(additionalUserInfo);

    // req.session.user = {
    //     nickname: userInfo.nickname || '미동의',
    //     gender: userInfo.gender || '미동의',
    //     email: userInfo.email || '미동의',
    //     age: userInfo.age || '미동의',
    //     birthyear: userInfo.birthyear || '미동의',
    //     birthday: userInfo.birthday || '미동의',
    // }

    res.send(`
        <h2>로그인 성공</h2>
        <p>닉네임: ${additionalUserInfo.nickname}</p>
        <p>이메일: ${additionalUserInfo.email}</p>
        <p>나이: ${additionalUserInfo.age}</p>
        <p>생일: ${additionalUserInfo.birthday}</p>
        `);
    res.redirect('/dashboard');
});

function loggedIn(req, res, next) {
    if (req.session.user) {
        return next();
    } else {
        res.status(403).send('권한이 없다...');
    }
}

app.get('/dashboard', loggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/api/user', (req, res) => {
    res.json(req,session?.user);
})

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('세션 삭제 실패');
        }
        res.redirect('/');
    })
})

app.listen(PORT, () => {
    console.log('서버레디');
})