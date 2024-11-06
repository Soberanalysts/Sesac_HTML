
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    console.log(username);

    //DOM이 로딩되자마자, 사용자 가져와서 화면에 출력한다
    updateUsers();
    // console.log(form);
    
    //새로운 사용자 추가
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = username.value;
        if (!name) {
            alert('이름을 입력하세요.');
            return;
        }

        fetch('/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ name }), // name=name의 값
        }).then((response) => {
            if (response.ok) {
                alert('등록 성공');
                username.value = "";
            } else {
                alert('등록 실패');
            }
        }).catch((error) => {
            alert(`등록 중에 오류가 발생했습니다., ${error.message}`);
        })
    })

})

function updateUsers() {
    fetch('/user')
    .then((response) => response.json())
    .then((users) => {
        //결과를 출력할곳??
        console.log(users);
        const userTable = document.getElementById('userTable');
        for (const key in users) {
            const row = document.createElement('div');
            row.innerText = `ID: ${key}, Name: ${users[key]}`;
            userTable.appendChild(row);

            //'수정' 버튼 추가
            const modifyButton = document.createElement('button');
            modifyButton.textContent = '삭제';
            row.appendChild(modifyButton);

            //'삭제' 버튼 추가
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제';
            row.appendChild(deleteButton);

            //위에 모든 내용(즉 한줄을 테이블에 삽입)
            userTable.appendChild(row);
        }
    })
    .catch((error) => {
        console.error(" 사용자를 불러오는데 실패하였음", error);
        alert("사용자 로딩 오류");
    })
}

function deleteUser(userId) {
    fetch(`/user`, {
        method: 'DEKETE',
    })
    .then(response => {
        if(response.ok) {
            alert('삭제 성공');
        } else {
            alert('삭제 실패');
        }
    })
    .catch(error => {
        console.error("삭제 중 오류??", error.message);
        alert('삭제 중 오류가 발생했습니다.');
    })
}

function handleDeleteRequest(req, res) {
    if (req.url.startsWith('/user/')) {
        const username = path.basename(req.url);
        if (username && users[username]) {
            delete users[username];
            res.writeHead(200, {'Content-Type': 'text-plain; charset=utf8'});
            res.end(`${username} 사용자를 찾을 수 없습니다.`);
        }
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
}

server.listen(3000, () => {
    console.log('서버가 3000 포트에서 대기 중입니다.');
})