const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));
app.use('/image', express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.get('/user', (req, res) => {
    res.json(users);
})

app.post('/user', (req, res) => {
    console.log(req.body);
    res.status(404).sendFile(errorpage);
})

app.listen(PORT, () => {
    console.log(`서버가 ${PORT} 포트에서 대기 중입니다.`)
})