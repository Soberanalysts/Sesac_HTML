// const { response } = require("express");

// const { response } = require("express");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form');
    const username = document.getElementById('username');

    updateUsers();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = username.value;
        if (!name) {
            alert('이름을 입력하세요.');
            return;
        }

        registerUser(name);
    })
})

function registerUser(name) {
    fetch('/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ name: name
         }) //name = name의 값
    }).then((response) => {
        if (response.ok) {
            username.value = "";
            updateUsers();
        } else {
            alert('등록 실패');
        }
    }).catch((error) => {
        alert(`등록 중에 오류가 발생했습니다. ${error.message}`);
    })
}

function updateUsers() {
    fetch('/user')
        .then((response) => {
            const result = response.json();
            return result;
        })
        .then((users) => {
            console.log(users);
            const userTable = document.getElementById('userTable');
            userTable.innerText='';
        
        if (Object.keys(users).length === 0) {
            const row = document.createElement('div');
            row.textContent = "등록된 사용자가 없습니다";
            userTable.appendChild(row);
        } else {
            for (const key in users) {
                const row = document.createElement('div');
                row.innerText = `ID: ${key}, Name: ${users[key]}`;
                userTable.appendChild(row);
    
                //'수정' 버튼 추가
                const modifyButton = document.createElement('button');
                modifyButton.textContent = '수정';
                modifyButton.addEventListener('click', () => modifyUser(key));
                row.appendChild(modifyButton);
    
                //'삭제' 버튼 추가
                const deleteButton = document.createElement('button');
                deleteButton.textContent = '삭제';
                deleteButton.addEventListener('click', () => deleteUser(key));
                row.appendChild(deleteButton);
    
                //위에 모든 내용(즉 한줄을 테이블에 삽입)
                userTable.appendChild(row);
            }
        }
    })
    .catch((error) => {
        console.error("사용자를 불러오는데 실패하였음", error.message);
        alert("사용자 로딩 오류");
    })
}

function deleteUser(userId) {
    fetch(`user/${userId}`, {
        method: 'DELETE',
    })
        .then(response => {
            if(response.ok) {
                alert('삭제 성공');
                updateUsers();
            } else {
                alert('삭제 실패');
            }
        })
        .catch(error => {
            console.error('삭제 중 오류??', error.message);
            alert('삭제 중 오류가 발생했습니다.')
        })

}

// async function deleteUser(userId) {
//     try {
//         const response = await fetch('/user');
//         if(response.ok) {

//         }
//     } catch(error) {
//         console.log(error);
//     }
// }


function modifyUser(userId) {
    const newName = prompt('수정할 이름을 입력하세요.');
    if (newName !== null) {
        fetch(`/user/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newName}),
        })
        .then(response => {
            if (response.ok) {
                updateUsers();
            } else {
                alert('수정실패');
            }
        })
        .catch(error => {
            console.error('수정 중 오류 발생:', error);
            alert('수정 중 오류가 발생했습니다.');
        });
    }


}