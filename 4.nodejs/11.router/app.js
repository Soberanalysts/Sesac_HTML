const express = require('express');
const app = express();

app.use('/user', userRouter);
app.use('/product', userRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('유저');
});

app.listen(3000, () => {
    console.log('서버 레디');
});
