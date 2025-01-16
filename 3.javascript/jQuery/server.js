const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'ajax.html'));
});

app.get('/data', (req, res) => {
    res.json({ title: "헬로우 타이틀", content: "여기는 긴 문장 아무거나......"});
})

app.listen(port, () => {
    console.log('서버레디');
});