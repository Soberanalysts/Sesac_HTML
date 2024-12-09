const express = require("express");
const app = express();
var cors = require("cors");
const morgan = require('morgan');
const sqlite = require('better-sqlite3');

const db = sqlite('writepost.db');

// const multer = require("multer");

// let posts = [];




//미들웨어
// app.use(express.urlencoded({ extended: false })); //false : querystring 모듈 사용
app.use(express.json());
app.use(morgan('dev')); //기본 개발자 디버깅
app.use(cors());

// app.get("/api/users", (req, res) => {

//   const summary = users.map(u => ({id: u.id, name: u.name}));

//   res.json( users );
// });

app.post('/api/writepost', (req,res) =>{

  const {title, content} = req.body;
  const statement = db.prepare(`INSERT into posts (title, content) values (?, ?)`);

  statement.run([title, content]);

  res.json({success: true});
});

app.get('/api/posts', (req, res) => {
  const getstatement = db.prepare(`SELECT * FROM posts`);
  const allPost = getstatement.all();
  console.log("모든포스트목록",allPost);
  res.json(allPost);
})


// app.get('/api/users/:userId', (req,res) => {
//   const userId = parseInt(req.params.user);

  
//   const user = users.find(u => u.id == userId);

//   if (!user) {
//     return res.status(404).json({error: 'User not found'});
//   }

//   console.log(user);

//   res.json(user);
// })


app.listen(5500, () => {
  console.log("서버 레디 on : ", 5500);
});
