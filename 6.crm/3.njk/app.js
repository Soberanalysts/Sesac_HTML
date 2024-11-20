require('dotenv').config()
const express = require('express');
const nunjucks = require('nunjucks');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const morgan = require('morgan');
const debug = require('debug');

const app = express();
const port = 3000;
const db = new sqlite3.Database('user-sample.db');
const isDebugMode = process.env.DEBUG ==='true';
const debugS = new debug('myapp:server');
const debugR = new debug('myapp:request');

nunjucks.configure('views', {
    autoescape: true,
    express: app,
})


//미들웨어
app.use(express.static('public'));
if(isDebugMode){
    console.log('Running on development mode. Debugging is enabled.');
    app.use(morgan('dev'));
} else {
    console.log('Running on production mode. Debugging is disabled');
    app.use(morgan('combined'));
}

//라우트
//시스템 호출용 API 라우트

app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM users';
    const data = query.get(userId);
    db.all(query, [], (err, rows) => {
        res.json(rows);
    });
});

app.get('/error', (req, res) => {
    const error = new Error('This is a test error');
    if (isDebugMode) {
        console.error(`[DEBUG ERROR] ${error.message}`);
        res.status(500).send(`Internal Error: ${error.stack}`);
    } else {
        res.status(500).send('Internal Error');
    }
});


app.get('/api/users/:id', (req, res) => {
    debugR('내가 쓰고 싶은 메세지 - 사용자 디테일');
    const userId = req.params.id;
    const query = 'SELECT * FROM users WHERE Id = ?';
    const data = query.get(userId);

    // db.get(query, [userId], (err, rows) => {
    //     res.json(rows);
    // });

    // res.render('user_deatil.html');
    
    res.render('user.html', {data:data});
});

app.get('/', (req, res) => {
    debugR('내가 쓰고 싶은 메세지 - 사용자 디테일');

    const query = db.prepare('SELECT * FROM users');
    const data = query.all();

    res.render('user.html', {data:data});
});


// 서버 시작
app.listen(port, () => {
    console.log('서버 레디');
});
