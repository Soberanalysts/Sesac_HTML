const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

app.use(session({
    secret: 'my-secret-key', //내 메모리에 저장할 데이터의 암호화 키
    resave: false, // 세션 데이터가 변경되지 않았어도 계속 재저장할거냐
    saveUninitialized: true,    //초기화되지 않은 세션을 저장소에 저장할거냐?
}));

function userCount(req, res, next) {
    //세션에 방문 카운트 변수 있으면 재사용, 없으면 0으로 초기화
    req.session.visitCount = req.session.visitId
}
app.get('/', (req, res) => {
    req.session.username = 'user1';
    req.session.cart = ['사과우유', '딸기우유', '바나나우유'];
    //세션에 저장했지만, 자동으로 set-cookie를 통해서 session id가 전송됨
    //이때, express에서 정한 세션id의 키가 connect.sid
    res.send('루트');

    if (username && cart) {
        res.send(`너는 ${username} 이고, 이전에 장바구니에 `);
    } else {
        res.send(`새로 오셨군요 고갱님~~ 상품을 담아주세요`);
    }

    console.log(`세션ID: ${req.sessionID}`);
    console.log(`세션 내용: ${req.session}`);
});


// app.get('/', (req,res) => {
//     //이때, express에서 정한 세션 id의 키가 connect.sid
//     res.send('루트');
// });

// app.get('/readsession', (req, res) => {
//     const username = req.session.username;
//     const cart = req.session.cart;
//     const visitCount = req.session.visitCount;

//     if(username && cart) {
//         res.send(`너는 ${username} 이고, ${visitCount} 번째 방문이고, 이전에 `)
//     }
// })

// app.listen(port, () => {
//     console.log('서버 레디');
// })


app.listen(port, () => {
    console.log('서버 레디');
});

