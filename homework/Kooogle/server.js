require('dotenv').config();
const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3000;

const RESTAPI_KEY = process.env.KAKAO_RESTAPI_KEY;

//정적파일 제공
app.use(morgan('dev'));
app.use(express.static('public'));
// app.use(cors());

app.get('/api/search', async function (req, res) {
    //카카오로 요청하기
    const { query, type } = req.query;
    console.log(query, type);

    if (!query || !type) {
        return res.status(400).json({error: '입력 인자 오류'});
    }

    const endpoint = 'https://dapi.kakao.com/v2/search/web'; // JSON 결과

    if (type === 'web') {
        const endpoint = 'https://dapi.kakao.com/v2/search/web'
    } else if (type === 'image') {

    } else if (type === 'vclip') {

    } else {

    }

    const params = {
        query,
    }

    const response = await axios.get(endpoint, {
        headers: {
            Authorization: `KakaoAK ${KAKAO_RESTAPI_KEY}`
        },
        params
    });
    console.log(response.data);
    res.json(response.data);
});


app.listen(PORT, function () {
    console.log('서버 run');
});
