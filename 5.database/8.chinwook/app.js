//라이브러리 추가
require('dotenv').config();
const express = require('express');

const sqlite3 = require('sqlite3').verbose(); // 개발환경에서만 사용
const path = require('path');

const PORT = 3000;
const db = new sqlite3.Database(process.env.DB_PATH);
const app = express();

//미들웨어 추가
app.use(express.static('public'));

//라우트 정의
app.get('/',(req, res) => {
    res.sendFile(path.resolve('public/index.html'));
});

app.get('/api/search', (req, res) => {
    const {searchQuery, searchSection, page=1} = req.query;  //페이지는 기본 1페이지로 세팅

    console.log(`사용자 입력: ${searchQuery}, 검색 주제: ${searchSection}, 페이지: ${page}`);
    const itemsPerPage = 10;
    const offset = (page -1) * itemsPerPage;

    const countSql = `SELECT COUNT(*) AS count FROM artists WHERE name LIKE ?`;
    db.get(countSql, [`%${searchQuery}%`], (err, row) => {
        if (err) {
            console.error(err.message);
            res.status(500);
        }
        const totalPage = Math.ceil(row.count / itemsPerPage);
        console.log(`갯수: ${row.count}, 전체페이지수: ${totalPage}`);

        const sql = `SELECT * FROM artists WHERE name LIKE ? LIMIT ? OFFSET ?`;
        // const sql = `SELECT * FROM ${searchSection} WHERE (name || Title) LIKE ? LIMIT ? OFFSET ?`;
        db.all(sql, [`%${searchQuery}%`, itemsPerPage, offset], (err, rows) => {
            res.json({ results: rows, currentPage: page, totalPage: totalPage, status: "ok" });
        });
    });


});

app.listen(PORT, () => {
    console.log('서버 레디');
});
