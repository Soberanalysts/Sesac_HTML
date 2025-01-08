const express = require('express');
const path = require('path');
const expressWs = require('express-ws');

const app = express();
expressWs(app);

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.use(express.static(path.join(__dirname, 'public')));

app.ws('/game', (ws, req) => {
    console.log('클라이언트 접속');

    ws.on('message', (message) => {
        const data = JSON.parse(message);

        if (data.type === 'keypress') {
            console.log(`키눌림: ${data.key}`);
            // Broadcast(data.key)
        }
    })
})

app.listen(3000, () => {
    console.log('서버 레디');
});