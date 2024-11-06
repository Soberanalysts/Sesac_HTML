const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));
app.use('/image', express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
})