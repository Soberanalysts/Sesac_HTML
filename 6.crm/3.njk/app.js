const express = require('express');
const nunjucks = require('nunjucks');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;
const db = new sqlite3.Database('user-sample.db');


//미들웨어
app.use(express.static('public'));


//라우트
//시스템 호출용 API 라우트

app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM users';

    db.all(query, [], (err, rows) => {
        res.json(rows);
    });
});

app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;

    const query = 'SELECT * FROM users WHERE Id = ?';
    db.get(query, [userId], (err, rows) => {
        res.json(rows);
    });
    res.render('user_deatil.html');
});

app.get('/', (req, res) => {
    const query = db.prepare('SELECT * FROM users');
    const data = query.all();

    res.render('user.html', {data:data});
});

