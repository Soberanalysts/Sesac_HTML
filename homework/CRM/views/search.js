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
    // displayTable();

    displayPagination(searchQuery, parseInt(data.currentPage), ParseInt(data.totalPage));
}
// function displayTable()

function renderTable(data) {
    const tableHeader = document.getElementById("table-header");
    const tableBody = document.getElementById("table-body");
    tableHeader.innerHTML = "";
    tableBody.innerHTML = "";
    //헤더 그리기 tr 안에 th 그리기
    const headerRow = document.createElement("tr");
    const fields = Object.keys(data[0]);
    fields.forEach((f) => {
      if (f !== "Address") {
        const th = document.createElement("th");
        th.textContent = f;
        headerRow.appendChild(th);
      }
    });
    tableHeader.appendChild(headerRow);
    // 바디 그리기 tr 안에 td 그리기
    data.map((e) => {
      const bodyRow = document.createElement("tr");
      bodyRow.addEventListener("click", () => {
        window.location.href = `/user/${e.Id}`;
      });
      for (const [key, value] of Object.entries(e)) {
        if (key !== "Address") {
          const td = document.createElement("td");
          td.textContent = value;
          bodyRow.appendChild(td);
        }
      }
      tableBody.appendChild(bodyRow);
    });
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
