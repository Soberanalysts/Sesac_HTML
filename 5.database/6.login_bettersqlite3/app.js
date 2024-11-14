const express = require('express');
const session = require('express-session');
const sqlite3 = require('sqlite3');
const path = require('path');
const { profile } = require('console');
const SQLiteStore = require('connect-sqlite3')(session);


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
    saveUninitialized: true,
    store: new SQLiteStore,
}));

//미들웨어 등록
app.use(express.urlencoded({extended: true})); //기본폼 입력값
app.use(express.json());

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

app.get('/profile-data', (req, res) => {
    const user = req.session.user;
    // console.log(user);

    if (user) {
        db.get(`SELECT * FROM users WHERE id = ?`, [user.id],(err, row) => {
            if (row) {
                res.json({
                    username: user.username,
                    email: row.email,
                    created_at: row.role
                });
            } else {
                res.status(404).json({ error: '사용자 없다'});
            }
        })
    } else {
        res.status(404).send('로그인 안된 사용자임');
    }
    // res.sendFile(path.resolve('public/profile.html'));
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
});

app.get('/logout', (req, res) => {
    const user1 = req.session.user;
    console.log('로그아웃 완료1: ', user1)

    req.session.destroy();
    //에러처리 아무것도 안했음

    // const user2 = req.session.user;
    // console.log('로그아웃 완료: ', user2);

    // res.send();
    res.redirect('/');
})

app.listen(port, ()=> {
    console.log('서버레디');
});

