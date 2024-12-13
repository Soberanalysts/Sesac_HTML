require('dotenv').config()
const axios = require('axios');

const RESTAPI_KEY = process.env.KAKAO_RESTAPI_KEY;

const url = "https://dapi.kakao.com/v2/search/web";
const headers = {
    Authorization: `KakaoAK ${RESTAPI_KEY}`
}

const query = "아이유";

const params = {
    query: query,
    sort: "accuracy",
    page: 1,
    size: 10
}


// Promise 기반 체이닝... (~ES6... 2015년)
axios.get(url, { headers, params})
    .then(resposne => {
        const data = resposne.data;
        console.log(data);
    });

    // Moderb JS 방식..
    // async/await 방식 (ES8부터 도입?... ES2017년도...)
const fetchFunction = async () => {
    //try catch 실무적으로 필수
    try {
        const response = axios.get(url, {headers, params});
        const data = response.data;
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}

fetchFunction();

