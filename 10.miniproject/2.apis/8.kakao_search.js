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
const params2 = {
    query: query,
    sort: "accuracy",
    page: 3,
    size: 10
}


// Promise 기반 체이닝... (~ES6... 2015년)
// axios.get(url, { headers, params})
//     .then(response => {
//         const data = response.data;
//         console.log(data);
//     });

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

// fetchFunction();

// const App = () => {

// }

// function App() {

// }

const totalPages = 3;

const fetchFunctionPages = async (totalPages) => {
    //try catch 실무적으로 필수
    try {
        for (let page = 1;page <= totalPages; page++){
            params2.page=page;
            // console.log(params2);
            const response = await axios.get(url, {headers, params2});
            const data = response.data;
            console.log(data);
        }

    } catch (error) {
        console.error(`에러코드: ${error.response?.status}, ${error.message}`);
    }
}

fetchFunctionPages(3);