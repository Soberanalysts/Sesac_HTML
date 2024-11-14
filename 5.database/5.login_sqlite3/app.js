const express = require('express');
const session = require('express-session');
const sqlite3 = require('sqlite3');
const path = require('path');
const { profile } = require('console');

const app = express();
const port = 3000;
const db = new sqlite3.Database('users.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY
        AUTOINCREMENT, username TEXT, password TEXT)`);
        // db.run("INSERT INTO users (username, password) VALUES ('user1', 'password')");
});

//세션 초기화
app.use(session({
    secret: 'my-secret-1234',
    resave: false,
    saveUninitialized: true
}));

//미들웨어 등록
app.use(express.urlencoded({extended: true})); //기본폼 입력값

// 정적 파일 제공 설정
app.use(express.static('public'));

//라우팅 목록
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
    // res.sendFile(path.join(__dirname,public, 'profile.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.resolve('public/profile.html'));
    // res.sendFile(path.join(__dirname,public, 'profile.html'));
});

app.post('/login', (req, res) => {
    // const username = req.body.username;
    // const password = req.body.password;
    const {username, password} = req.body;
    console.log(username, password);

        // 이렇게 코딩하면  SQL injection에 취약
    // const queryStr = `SELECT * FROM users WHERE username = '${username}' AND 
    // password = '${password}'`;
    const queryStr = `SELECT * FROM users WHERE username = ? AND password = ?`;
    console.log(queryStr);
    

    db.get(queryStr,[username, password], (err, row) => {
        if (row) {
            console.log(`사용자 조회: ${row}`);
            res.send(`로그인 성공: ${row.username}`);
        } else {
            res.send('로그인 실패');
        }
    });
})

app.listen(port, ()=> {
    console.log('서버레디');
});