const { response } = require("express");

document.addEventListener('DOMContentLoaded', () => {
    //폼 잡아다가... 폼의 기본 기능 못하게 하고...
    document.getElementById('login-form').addEventListener('sumit', async (e) => {
        e.preventDefault(); //폼의 기본 기능 무력화

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        
        const response = await fetch('login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        })
    });

    if (response.redirected) {
        const data = await response.text();
        console.log(response.url);

    } else {
        const data = await response.text();
        document.getElementById();

    }

    async function ret() {
        await fetch('/login', {

        });
    //fetch로 /login 요청해서 결과받기
    //실패시 이 DOM 어딘가에 결과가 출력
    //성공시 원래 하던대로 redirect 로 /profile로 이동
});