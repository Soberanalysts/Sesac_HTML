

const form = document.getElementById("postForm");

console.log(form);

document.getElementById('postForm').addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    
    
    console.log('Title:', title, 'Content:', content);

    fetchPost( title, content );
    // Retrieve posts from localStorage


    // const posts = JSON.parse(localStorage.getItem("posts")) || [];

    // // Populate table rows
    // posts.forEach((post, index) => {
    //     const row = document.createElement("tr");
    //     row.innerHTML = `
    //         <td>${index + 1}</td>
    //         <td>${post.title}</td>
    //         <td>${post.content}</td>
    //     `;
    //     boardContent.appendChild(row);
    // });
});

const fetchPost = async (title, content) => {
    const response = await fetch(`http://127.0.0.1:5500/api/writepost`,{ 
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ title, content})
    })
    console.log("리스폰스", response);
    const data = await response.json();
}


// function deleteContent(userId) {
//     console.log('user', userId);
//     fetch(`/user/${userId}`, {
//         method: 'DELETE',
//     })
//     .then(response => {
//         if(response.ok) {
//             alert('삭제 성공');
//             updateUsers();
//         } else {
//             alert('삭제 실패');
//         }
//     })
//     .catch(error => {
//         console.error("삭제 중 오류??", error.message);
//         alert('삭제 중 오류가 발생했습니다.');
//     })
// }

