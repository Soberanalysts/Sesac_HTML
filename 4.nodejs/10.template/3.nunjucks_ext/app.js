const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

app.set('view engine', 'html');

nunjucks.configure('views', {
    autoescape: true, //입려값 처리할떄 XSS 같은것 발생하지 않도록 처리하는 기능
    express: app,
    watch: true //템플릿 파일 변경된것 자동으로 감지
});

app.get('/', (req, res) => {
    const data = {
        title: '상품 Page',
        content: 'This is 사용자 content page' 
    }
    res.render('main', data)
});

//////////////백엔드에서 만들어 내는 html파일을 모듈화

app.get('/user', (req, res) => {
    const data = {
        title: '사용자 Page',
        content: 'This is 사용자 content page' 
    }
    res.render('user', data)
});

app.get('/user', (req, res) => {
    const data = {
        title: '상품 Page',
        content: 'This is 사용자 content page' 
    }
    res.render('product', data)
});



// app.get('/', (req, res) => {
//     const data = {};
//     res.render('main', {data:data});
// })

app.listen(3000, () => {
    console.log('서버 레디');
});

