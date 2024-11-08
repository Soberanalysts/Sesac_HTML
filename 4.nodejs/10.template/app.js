const express = require('express');

app.get('/', (req, res) => {
    const fruits = ['Apple', 'Banana', 'Orange', 'Graphs'];
    res.render('fruits', {fruits: fruits});
})
app.get('/greeting', (req, res) => {
    const username = 'shNa';
    res.render('greeting', {username});
})
app.get('/welcome', (req, res) => {
    const fruits = ['Apple', 'Banana', 'Orange', 'Graphs'];
    res.render('fruits', {fruits: fruits});
})

app.get('/greet')<% if (is Admin) { %>
    <h1> 안녕하세요, 관리자님! </h1>
    %> } else { %>
    <h1> 안녕, 사용자님! </h1>
        <% } %>
    }
}