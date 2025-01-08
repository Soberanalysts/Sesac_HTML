// cheerio
const axios = require('axios');
const cheerio = require('cheerio');
// const { response } = require('express');
const url = 'https://example2.com';

axios.get(url)
    .then((response) => {
        // console.log(response.data);
        const $ = cheerio.load(response.data);
        const title = data('title').text();
        console.log('사이트 제목: ', title);
    })
    .catch((error) => {
        console.error('요청에러:', error.status);
    })