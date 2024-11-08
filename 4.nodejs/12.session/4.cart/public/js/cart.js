document.addEventListener('DOMContentLoaded', () => {
    fetch('/products')
        .then(response => response.json())
        .then(products => displayProducts(products));
});

function displayProducts(products) {
    const productTableBody = document.querySelector('#productTable tbody');

    products.forEach((products) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${prouct.id}</td>
        <td>${prouct.name}</td>
        <td>${prouct.price}</td>
        <td><button>담기</button></td>       
        `;
        productTableBody.appendChild(row);
    });
}

function addToCart(productId) {
    fetch('/add-to-cart/:productId', (req, res) => {
        const product = ;
    })
}