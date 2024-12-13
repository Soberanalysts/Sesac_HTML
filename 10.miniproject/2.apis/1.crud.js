// import fetch from 'node-fetch'
// const fetch = require('node-fetch');
import axios from 'axios';       // For axios


async function fetchexample() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            console.log('에러');
            return;
        }
    
        const data = await response.json();
        console.log('가져온데이터: ', data.title);
    } catch (error) {
        console.log('통신오류');
    }
}

async function axiosexample() {
    try {
         const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

         console.log('응답코드: ', response.status);
         console.log('데이터: ', response.data.title);
    } catch (error) {
        console.log('axios 통신오류');
    }
}
fetchexample();
axiosexample();

// (async () => {

// })();