const express = require('express');
const path = require("path");
const cors = require('cors')

const port = 3000;

const app = express();
app.use(cors());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/events', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Content-Type', 'text/event-stream');

    //클라이언트가 접속시 현재 시간
    const sendTime = () => {
        res.write(`data: ${new Date().toISOString()}
        \n\n`)
    }
    // res.send('hello');
    // sendTime();
    const interval = setInterval(sendTime, 1000);

    req.on('close', () => {
        clearInterval(interval);
        console.log('사용자 도망감');
    })
});

app.listen(port, () => {
    console.log('서버 레디');
})
