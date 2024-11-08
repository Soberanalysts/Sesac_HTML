const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const port = 3000;

const products = [
    {id:1, name: '바나나', price: 2000},
    {id:2, name: '사과', price: 3000},
    {id:3, name: '오렌지', price:1500},
]

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path))

app.get('/products', (req,res) => {
    res.json(products);
});
app.get('/cart', (req,res) => {
    const cart = req.session.cart || [];
    res.json({cart});
});

app.post('/add-to-cart/:productId', (req, res) => {
    // const productId = req.params.productId;
    const productId = parseInt(req.params.productId);
    // console.log(typeof productId);

    if(!product) {
        return res.status(404).json({message: '상품이 없다!'});
    }

    //TODOL 장바구니에 담는 코드 작성
    const cart = req.session.cart || [];

    cart.push({
        id: product.id,
        name: product.name,
        price: product.price
    });
    res.json({ message: '상품이 장바구니에 담겼습니다'});
})

app.listen(port, () => {
    console.log('서버 레디');
});

