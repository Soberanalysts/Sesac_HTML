const express = require('express');
const path = require("path");
const cors = require('cors')

const port = 3000;

const app = express();
app.use(cors());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'news.html'));
});

const newsArticles = [
    `뉴스`
];

// SSE 엔드포인트
app.get('/news', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Content-Type', 'text/event-stream');

    const sendRandomNews = () => {
        const randomIndex = Math.floor(Math.random() * newsArticles.length);
        const news = newsArticles[randomIndex];
        res.write(`data: ${JSON.stringify({ news })}\n\n`);
    }

    let progress = 0;

    const interval = setInterval(() => {
        sendRandomNews();
        }, Math.floor(Math.random() * 3000) + 2000);
    
    req.on('close', () => {
        clearInterval(interval);
        console.log('사용자 도망감');
    })
});

app.listen(port, () => {
    console.log('서버 레디');
})
