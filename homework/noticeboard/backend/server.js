const express = require("express");
const app = express();
var cors = require("cors");
const morgan = require('morgan');

app.use(express.json());
// app.use(cors());

const users = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 20,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    age: 30,
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    age: 40,
  },
];

// 각종 미들웨어 셋업
// app.use(cors());//모든거 다 허용
app.use(cors({
  origin: ['http://localhost:3001', 'http://127.0.0.1:3001', 'https://my-domain.com', 'http://my'],
  methods: ['GET', 'POST'],
})); 

app.use(morgan('dev')); //기본 개발자 디버깅

app.get("/api/users", (req, res) => {

  const summary = users.map(u => ({id: u.id, name: u.name}));

  res.json( users );
});

app.get('/api/users/:userId', (req,res) => {
  const userId = parseInt(req.params.user);

  
  const user = users.find(u => u.id == userId);

  if (!user) {
    return res.status(404).json({error: 'User not found'});
  }

  console.log(user);

  res.json(user);
})

app.listen(3001, () => {
  console.log("서버 레디");
});
