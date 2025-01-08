const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://news.naver.com/section/105';

axios.get(url)
    .then((response) => {
        const $ = cheerio.load(response.data);
        const title = $('title').text();
        console.log('사이트 제목: ', title);
        // const content = $('div > a > strong');
        // console.log(`첫번째 기사제목: ${content.first().text()}`);
        // console.log(`첫번째 기사제목: ${content}`);

        // for(let i =0 ; i< content.leng) 
        // $('div > a > strong').map((e) => {eq(e).text()});

        // $('.section_article as_headline _TEMPLATE').each((indexedDB, element) => {
        //     console.log(element.text());
        // })
        $('li.sa_item._SECTION_HEADLINE').each((index, element) => {
            console.log(element).find('div.sa_text a').each((_, subElement) => {
                const title = $(subElement).text().trim();
                console.log(title);
            });
        })
    })
    .catch((error) => {
        console.error('요청에러: ', error.status);
    })