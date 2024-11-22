const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send('상품 조회');
    })
    .post((req, res) => {
        res.send('상품 추가');
    })
    .put((req, res))