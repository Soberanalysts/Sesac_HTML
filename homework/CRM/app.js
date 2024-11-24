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
// app.get("/", (req, res) => {
//     res.sendFile(path.resolve("public/users.html"));
//   });
//   app.get("/user/:id", (req, res) => {
//     res.sendFile(path.resolve("public/user_detail.html"));
//   });
  

app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM users';
    const data = query.get(userId);
    db.all(query, [], (err, rows) => {
        res.json(rows); 
    });
});

app.post("/api/users/", (req, res) => {
    // const { name, gender } = req.query;
    const name = req.query;
    const queryParams = [];
    const countparams = [];
    const curPage = Number(req.params.page) || 1;
    const offset = (curPage - 1) * LIMIT;
  
    let query = `SELECT * FROM users WHERE 1=1`;
    let countQuery = `SELECT count(*) as count FROM users WHERE 1=1`;
  
    if (name) {
      query += ` AND name = ?`;
      countQuery += ` AND name = ?`;
      queryParams.push(name);
      countparams.push(name);
    }
    // if (gender) {
    //   query += ` AND gender = ?`;
    //   countQuery += ` AND gender = ?`;
    //   queryParams.push(gender);
    //   countparams.push(gender);
    // }
  
    query += ` LIMIT ? OFFSET ?`;
    queryParams.push(LIMIT);
    queryParams.push(offset);
  
    //아무 페이지값도 전달하지 않았을 땐 curPage가 1
    const stmt = db.prepare(query);
    const data = stmt.all(queryParams);
    //어떻게하면 배열로 1,2,3,4,5,6 ... last - 3, last - 2, last - 1, ...이쁘게 전달해줄 수 있을까?
    //전체페이지
    const totalArr = paging(curPage, countQuery, countparams);
    console.log(totalArr, "total ARR");
    res.json({
      data: data,
      page: curPage,
      totalArr: totalArr,
      name: name,
    //   gender: gender,
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
