// document.addEventListener(DOMC"ontentLoaded", () => {
//     const boardContent = document.getElementById("boardContent");

//     // Retrieve posts from localStorage
//     const posts = JSON.parse(localStorage.getItem("posts")) || [];

//     // Populate table rows
//     posts.forEach((post, index) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${index + 1}</td>
//             <td>${post.title}</td>
//             <td>${post.content}</td>
//         `;
//         boardContent.appendChild(row);
//     });
// });

const tbody = document.getElementById('boardContent');

async function fetchAllPosts() {

    const response = await fetch("http://localhost:5500/api/posts");
    const data = await response.json();
        console.log("data : ",data);
    for(const post of data) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.content}</td>
        `;
        tbody.appendChild(tr);
    }
}
fetchAllPosts();