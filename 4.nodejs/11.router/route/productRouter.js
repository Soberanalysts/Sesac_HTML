const express = require('express');
const router = express.Router();

router.route('/list', (req, res) => {
    res.send('상품 목록 출력')
});

router.route('/details', (req, res) => {
    res.send('상품 상세 목록 출력')
})

router.route('/:id/details', (req, res) => {
    const productId = req.params.Id;
    res.send('상품 상세 목록 출력')
})