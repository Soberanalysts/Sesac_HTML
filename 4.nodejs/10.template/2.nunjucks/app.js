const express = express();
const nunjucks = require('nunjucks');

const app = express();

app.set('view engine', 'njk');



nunjucks.configure('views', {
    autoescape: true, //입력값 처리할때 XSS 같은것 발생하지 않도록 처리하는 기능
    express: app
});

app.get('/', (req, res) => {
    res.render('index.html', {title: '익스프레스웹', message: '웰컴'});
});

app.listen(3000, () => {
    console.log('서버 레디');
});