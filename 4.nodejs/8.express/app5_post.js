const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()) // 이 미들웨어가 body안에 있는 내용중에 json을 처리해서 body라는 변수에 담아줌

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><title>야옹</title></head>
            <body>
                <h1>이미지 테스트</h1>
                <img src="/static/chart.jpeg" alt="차트 분석 결과">
            </body>

            `);
});

app.post('/submit', (req, res) => {
    let data ='';

    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => {
        try {
            const jsonData = JSON.parse(data);
            res.json({ receivedData: jsonData });
        } catch (error) {
            res.status(400).json({ error: '잘못된 형식의 JSONㅇ르 보냈냐...'});
        }
        const jsonData = JSON.parse(data);
        res.json({ receivedData: jsonData });
    });
    res.send(`루트`);
});

app.post('/submit2', (req, res) => {
    const jsonData = req.body; //req.body에 JSON데이터를 담아서 보내줌...
})

app.get('/sendfile', (req, res)=> {
    const htmlfile = path.join(__dirname, public, 'index.html');
    res.sendfile(htmlfile);
})

app.listen(3000, () => {
    console.log("서버 레디");
});

