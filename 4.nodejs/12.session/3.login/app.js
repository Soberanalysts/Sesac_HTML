const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'my-secret-key',    //내 메모리에 저장할 데이터의 암호화 키
    resave: false,           // 세션 데이터가 변경되지 않았어도 게속 저장?
    saveUninitialized: true, //초기화 되지 않은 세션을 저장소에 저장할거냐??
}))

app.get('/', (req,res) => {
    //이때, express에서 정한 세션 id의 키가 connect.sid
    res.send('루트');
});

const users = [
    {id: 1, username: 'user1', password: 'pass1'},
    {id: 2, username: 'user2', password: 'pass2'},
];

app.get('readsession', (req, res) => {
    const usernaem = req.session.username;
    const cart = req.session.cart;
    const visitCount = req.session.visitCount;

    if(username && cart) {
        res.send(`너는 ${username} 이고, ${visitCount} 번째 방문이고, 이전에 장바구니에 ${car}`)
    }
})

app.post('/login', (req, res) => {
    const { username, password } = req.body; // 미들웨어로 파서 추가해야함.
    console.log(`사용자로 부터 받아온 username ${username}, password: ${password}`)

    //사용자가 입력한 id/pw를 위의 users 자료구조에서 검색
    const user = null;
    for (let i = 0; i < users.length; i++ ) {
        if(users[i].username){
            
        }
    }
    if (user) {
        res.json({message: '로그인성공'})
    } else {
        res.status(401).json({message : '로그인 실패'})
    }
})

app.get('/profile', (req, res) => {
    const user = req.session.username;

    if(user) {
        res.json({username: user.username, message: `프로필 정보`});
    } else {
        res.status(401).json({ message: '인증되지 않은 사용자임'});
    }
});

//로그아웃은 어떻게??
app.get('/logout', (req, res) => {
    const user = req.session.username;
    
    if (user && !user.username) {
        req.session.destroy();
        res.json({ message: '로그아웃성공'} );
    } else {
        res.json({ message: '잉? 로그인 한적이 없는데?'})
    }
});

// app.get('/check-login', (req, res) => {

// });



app.listen(port, () => {
    console.log('서버 레디');
});