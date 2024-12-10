const axios = require('axios');

require('dotenv').config();

const url = 'http://api.openweathermap.org/data/2.5/weather';
const params = {
    q: 'Seoul',
    // appid: '1b352c3a4a27b8f094d44cd7a942956b',
    appid: process.env.OPENWEATHER_API_KEY,
    units: 'metric', //화씨가 섭씨로 바뀜
    lang: 'kr'
};

const fetchweather = async () => {
    const response = await axios.get(url, {params});
    // console.log("응답: ", response.data);
    const weather = response.data;
    console.log(`도시: ${weather.name}`);
    console.log(`온도: ${weather.main.temp} K 섭씨`)
    console.log(`날씨: ${weather.weather[0].description}`);
}

fetchweather();
// const response = await axios.get(url, {params})
//     .then(response => {
//         console.log("응답: ", response.data);
//     });

