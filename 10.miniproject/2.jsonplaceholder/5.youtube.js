const axios = require('axios');    
require('dotenv').config();

const totalPages = 10;
let nextPageToken =null;

const API_KEY = process.env.YOUTUBE_API_KEY;

if (!API_KEY) {
    console.error('YOUTUBE_API_KEY는 필수 입력 사항입니다.');
    process.exit(1);
}

const url = 'https://www.googleapis.com/youtube/v3/search';



const fetchYoutube = async () => {
    try {
        for (let page = 1; page <= totalPages; page++){
            const params = {
                part: 'snippet',
                q: '아이유',
                type: 'video',
                maxResults: 10,
                pageToken: nextPageToken,
                key: API_KEY
            }
            // const response = await axios.get(url);
            // const data = response.data;
            const response = await axios.get(url, { params });
            const data = response.data;
            
            // 다음 페이지의 ID;
            nextPageToken = data.nextPageToken;
            console.log('다음페이지: ', nextPageToken);

            console.log(data);
            // console.log(data.items[0].id);

            data.items.forEach(item => {
                const title = item.snippet.title;   //영상 제목
                const videoId = item.id.videoId;    //비디오클립 ID
                const videoUrl = `https://www.youtuve.com/watch?v=${videoId}`; //우리가 만든 URL
                const description = item.snippet.description; //영상설명

                console.log(`영상제목: ${title}`);
                console.log(`URL주소: ${videoUrl}`);
                console.log(`설명: ${description}`);
                console.log('-', repeat(40));
        })
        }
        

    } catch (error) {
        console.error('요청실패: ', error.message);
    }

}

fetchYoutube();