const express = require('express');
const app = express();
const port = 3000;

function myLogger(req, res, next) {//미들웨어는 3개의 인자를 받는다. req, res, 나의 다음 포인트...
    console.log(`LOG: ${req.method}, ${req.url}`);
    next();
}

function mySecurity(req, _, next) {
    console.log('나의 2번쨰 함수');
    next();
}

function myAuth(_, _, next) {
    console.log('나의 3번째 함수');
    next();
}

function mySesac(req, res, next) {
    console.log('나의 4번째 함수');
    next();
}

app.use(myLogger);
app.use(mySecurity);
app.use(myAuth);
app.use(mySesac);

app.get('/', (req, res)=>{
    res.send("헬로우");
});

app.listen(port, () =>{
    console.log("서버 레디");
})


//    next();호출해서 끝내야 한다.