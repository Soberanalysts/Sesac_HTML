const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('결과를 출력한다');
});

app.get('/user', (req, res) => {
    res.send('결과를 출력한다');
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    res.send(`사용자 ${req.params.id}를 출력한다`);
});

app.get('/user/:id/profile', (req, res) => {
    console.log(req.params);
    res.send(`사용자 ${req.params.id}에 대한 상세한 profile을 출력한다`);
});

// app.get('/user/1', (req, res) => {
//     res.send('결과를 출력한다');
// })

// app.get('/user/2', (req, res) => {
//     res.send('결과를 출력한다');
// })

// app.get('/user/3', (req, res) => {
//     res.send('결과를 출력한다');
// })

//서버 시작

app.listen(port, () => {
    console.log('서버 레디');
});

