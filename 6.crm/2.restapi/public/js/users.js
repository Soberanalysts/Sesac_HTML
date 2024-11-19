const { response } = require("express");

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-name');

searchButton.addEventListener('click', () => {
    searchName = searchInput.value;
    fetchUsers(searchName);
});

function fetchUsers(searchName) {
    fetch(`/api/users`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });

    // const response = await fetch(`/api/users`);
    // const data = await response.json();    
}

function renderTagble(data) {
    const tableHeader = document.getElementById('table-header');
    const tableBody = document.getElementById('table-body');

    // 지우고 출발하자...
    tableHeader.innerHTML = '';
    table

    //헤더 그리기: tr 안에 th 그리기
    const headerRow = document.createElement('tr');
    const [key, value] = Object.entries(data[0]);
    fields.forEach(field => {
        const th = document.createElement('th');
        th.textContent = f;
        headerRow.appendChild(th);
    })
    tableHeader.appendChild(headerRow);
    console.log(fields);

    //바디 그리기: tr안에 td 그리기
    Object.entries() //이를 통해 td 추가

    data.forEach(row => {
        const bodyRow = document.createElement('th');
        bodyRow.addEventListener('click', () => {
            window.location = `/api/users/${row.Id}`;
        })

        for (const [key, value] of Object.entries(row)) {
            if (key !== 'Id' && key !== 'Address') {
                const td = document.createElement('td');
                td.textContent = value;
                bodyRow.appendChild(td);
            }
        }
        tableBody.appendChild(bodyRow);
    });
}
