const { response } = require("express");

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginButton').addEventListener('click', login);
    document.getElementById('logoutButton').addEventListener('click', login);
});

function login(e) {
    e.preventDefault();
    console.log('로그인 버튼 클릭');

    fetch('/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password}),
    })
        .then(response => {
            if (response.ok) {
                console.lopg('로그인 성공');

                showProfile(username);
            } else {
                console.log('로그인 실패');
            }
        })
}

function showProfile() {

}

async function checkLoginStatusAsyncAwait() {
    try {
        const response = await fetch('/check-login');
        
    }
}
function logout() {
    fetch('/logout')
        .then(response => {
            if (response.ok) {
                showLoginForm();
            }
        });
}

