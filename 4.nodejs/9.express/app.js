const express = require('express');
const path = require('path');

//변수정의
//서버 설정
const app = express();
const PORT = 3000;

//내부 자료구조
const users = {};

//미들웨어
app.use('/static', express.static('static'));
app.use('/image', express.static('static/image'));

app.use(express.json()); // 요청의 바디에 application/json이 있으면? req.body에 담기

app.use((req, _, next) => {
    console.log(`LOG: ${req.method} ${req.url} `);
    next();
});

//라우트
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'about.html'));
});

app.get('/user', (req, res) => {
    res.json(users);
    // const { name } = req.body;
    // users[name] = name;
    // res.status(201).send('등록 성공');
    // res.type('text/plain');
    // res.json(users);
})


app.post('/user', (req, res) => {
    // console.log(req.body);
    // res.status(404).sendFile(errorpage);
    console.log(req.body);

    const { name } = req.body;
    users[name] = name;
    res.status(204).send('등록 성공');
})

app.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    delete users[id];
    res.status(204).send();
})

app.put('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    // delete users[id];
    users[id]=req.body.name;
    users[req.body.name] = req.body.name;
    res.status(200).send('수정 성공');
})

app.listen(PORT, () => {
    console.log(`서버가 ${PORT} 포트에서 대기 중입니다.`)
})