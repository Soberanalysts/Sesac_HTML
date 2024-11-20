const express = require('express');
const app = express();

app.use(express.static('static'));

// app.get('/', (req, res) => {
//     res.send('루트');
// });

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><title>야옹</title></head>
            <body>
                <h1>이미지 테스트</h1>
                <img src="/static/chart.jpeg" alt="차트 분석 결과">
            </body>
        </html>
            `);
});



app.listen(3000, () => {
    console.log('서버 레디');
})
