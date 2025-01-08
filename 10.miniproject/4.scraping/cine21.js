const axios = require('axios');
const cheerio = require('cheerio');

const url = 'http://cine21.com/rank/boxoffice/domestic';

axios.get(url)
    .then((response) => {
        const $ = cheerio.load(response.data);
        const title = $('title').text();
        console.log('사이트 제목: ', title);

        const boxofficeListContent = $('#boxoffice_list_content');
        console.log(boxofficeListContent.html());
    })
    .catch((error) => {
        console.error('요청에러: ', error.status);
    }) 