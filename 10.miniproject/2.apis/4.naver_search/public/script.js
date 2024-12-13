document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();         //기본동작 비활성화
    
    const query = document.getElementById('query').value.trim();
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = `<li>loading...</li>`

    
    //try catch 필수
try {
    const response = await fetch(`/search/blog?query=${encodeURIComponent(query)}`);
    const data = await response.json();
    resultsElement.innerHTML = '';// 로딩 끝난후 지우기
    
    //잘 왔다고 가정하고.. (실제로는 가정 하면 안됨.. 체크해야함.)
    if (data.items && data.items.length > 0) {
        data.items.forEach((item) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h2><a href="${item.link}" target="_blank">${item.title}</a></h2>
                <p>${item.description}</p>
                <small>Post Date: ${item.postdate}</small>
            `;
            resultsElement.appendChild(li);
        })
    }
} catch (error) {
    console.log('에러', error);
}
})