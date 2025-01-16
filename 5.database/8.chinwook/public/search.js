document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const searchQuery = document.getElementById('searchQuery').value;
    const searchSection = document.getElementById('searchSection').value;

    search(searchQuery, searchSection, 1);
});

async function search(searchQuery, searchSection, page) {
    console.log(searchQuery);

    const response = await fetch(`/api/search?searchQuery=${encodeURIComponent(searchQuery)}&searchSection=${encodeURIComponent(searchSection)}&page=${page}`)
    console.log(response);

    const data = await response.json();
    console.log(data);
    

    // const results = document.getElementById('results');
    // results.innerHTML = '';

    const resultsTable = document.getElementById("results").querySelector("tbody");
    resultsTable.innerHTML = "";
    // 결과 테이블의 <tbody> 비우기

    if (data.results && data.results.length > 0) {
        // data.results.forEach((artist) => {
        //     const li = document.createElement('li');
        //     li.textContent = artist.Name;
        //     results.appendChild(li);
        // })
        data.results.forEach((artist, result) => {
            const row = document.createElement("tr");

            // 번호 열
            const numberCell = document.createElement("td");
            numberCell.textContent = artist.ArtistId;
            row.appendChild(numberCell);

            // 이름 열
            const nameCell = document.createElement("td");
            nameCell.textContent = artist.Name; // API 데이터 구조에 따라 수정 필요
            row.appendChild(nameCell);

            // 세부 정보 열
            const detailsCell = document.createElement("td");
            detailsCell.textContent = result.details || "-"; // 세부 정보가 없을 경우 처리
            row.appendChild(detailsCell);

            // 테이블에 행 추가
            resultsTable.appendChild(row);
    })
    } else {
        const li = document.createElement('li');
        li.textContent = '검색 결과가 없습니다.';
        results.appendChild(li);
    }

    // displayPagination(searchQuery, parseInt(data.currentPage), ParseInt(data.totalPage));
}

function displayPagination(searchQuery, currPage, totalPage) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // 현재 내용 다 지우기;

    // 이전 버튼 추가
    const prevButton = document.createElement('button');
    prevButton.textContent = '이전';
    pagination.appendChild(prevButton);

    // 내용 출력
    const pageInfo = document.createElement('span');
    pageInfo.textContent = `페이지: ${currPage} / ${totalPage}`
    pagination.appendChild(pageInfo);

    // 다음 버튼 추가
    const nextButton = document.createElement('button');
    nextButton.textContent = '다음';
    nextButton.onclick = () => search(searchQuery, currPage + 1);
    pagination.appendChild(nextButton);
}
