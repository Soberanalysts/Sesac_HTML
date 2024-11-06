const express = require('express');
const path = require('path');
const app = express();

// static 폴더를 서빙하도록 설정
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});