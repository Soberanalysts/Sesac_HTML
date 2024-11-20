const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: '익스프레스웰', message: '웰컴투 EJS'});
});

app.get('/fruits', (req, res) => {
    const fruits = ['Apple', 'Banana', 'Orange', 'Graphs'];
    res.render('fruits', {fruits: fruits});
})

app.get('/greeting', (req, res) => {
    const username = 'shNa';
    res.render('greeting', {username});
})

app.get('/welcome', (req, res) => {
    const isAdmin = true;
    res.render('welcome', {isAdmin: isAdmin});
})

// app.get('/greet')<% if (is Admin) { %>
//     <h1> 안녕하세요, 관리자님! </h1>
//     %> } else { %>
//     <h1> 안녕, 사용자님! </h1>
//         <% } %>
//     }
// }

app.listen(3000, () => {
    console.log('서버 레디');
});