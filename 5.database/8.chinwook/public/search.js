document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const searchQuery = document.getElementById('searchQuery').value;

    search(searchQuery, 1);
});

async function search(searchQuery, page) {
    console.log(searchQuery);

    const response = await fetch(`/api/search?searchQuery=${encodeURIComponent(searchQuery)}&page=${page}`)
    const data = await response.json();
    console.log(data);
    

    const results = document.getElementById('results');
    results.innerHTML = '';

    if (data.results && data.results.length > 0) {
        data.results.forEach((artist) => {
            const li = document.createElement('li');
            li.textContent = artist.Name;
            results.appendChild(li);
        })
    } else {
        const li = document.createElement('li');
        li.textContent = '검색 결과가 없습니다.';
        results.appendChild(li);
    }

    displayPagination(searchQuery, parseInt(data.currentPage), ParseInt(data.totalPage));
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
