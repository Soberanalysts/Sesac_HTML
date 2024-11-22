const express = require('express');
const app = express();

const userRouter = require('./route/userRouter');
const productRouter = require('./route/productRouter');
const cartRouter = require('./route/cartRouter');

app.use('/user', userRouter);
app.use('/product', userRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('유저');
});

app.listen(3000, () => {
    console.log('서버 레디');
});
