import { fetch_checkLoginStatus } from './checkuser.js';

document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    document.getElementById('login').addEventListener('click', login);
});

function checkLoginStatus() {
    fetch('/api/check-login')
        .then((response) => response.json())
        .then((userData) => {
            if (userData.username) {
                document.getElementById('user-info').innerHTML = `
                ${userData.username} 님
                <span class="logout-btn" id="logout">Logout</span>
                `
                document.getElementById.style.display();

            }
        })
        .catch((error) => {
            console.error('로그인체크 오류');
        })
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password})
    })
        .then((response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error('로그인 실패');
            }
        }))
        .then((data) => {
            showProfile(data.message);
        })
        .catch((error) => {
            showLoginForm()
        })
}

function showProfile(username) {
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('usernameSpan').innerText = username;
}

function showLoginForm() {

}