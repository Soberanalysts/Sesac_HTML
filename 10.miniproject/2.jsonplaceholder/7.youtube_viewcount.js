const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.YOUTUBE_API_KEY;
if (!API_KEY) {
    console.error('YOUTUBE_API_KEY는 필수 입력 사항입니다.');
    process.exit(1);
}

const searchUrlAPI = 'https://www.googleapis.com/youtube/v3/search';
const videoUrlAPI = 'https://www.googleapis.com/youtube/v3/videos';

const maxResultPerPage = 10;
const totalPages = 5;

const searchResult = []; // 검색 결과를 담을곳

const fetchYoutube = async() => {
    let nextPageToken = null;

    try {
        for (let page = 1; page <= totalPages; page++) {
            const params = {
                part: 'snippet',
                q: '자바스크립트 개발',
                type: 'video',
                maxResults: maxResultPerPage,
                pageToken: nextPageToken,
                key: API_KEY
            }
            
            const response = await axios.get(searchUrlAPI, { params });
            const data = response.data;

            searchResult.push(...data.items);

            // 다음 페이지의 ID;
            nextPageToken = data.nextPageToken;
            console.log('다음페이지: ', nextPageToken);
        }
            for( let i = 0 ; i<searchResult.length; i++ ) {
                // data.items.forEach(async (item) => {
                    const item = searchResult[i];

                    const title = item.snippet.title; // 영상 제목
                    const videoId = item.id.videoId; // 비디오클립ID
                    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`; // 우리가 만든 URL
                    const description = item.snippet.description; // 영상 설명
                    
                    //각각의 비디오 클립에 대해서 추가정보를 조회 ...
                    const videoParams = {
                        part: 'statistics',
                        id: videoId,
                        key: API_KEY
                    }
                    //타이틀이 너무 길어서 짤라보기....
                    const maxTitleLength=30;
                    if (title.length > maxTitleLength) {
                        title = title.slice(0, maxTitleLength) + "...";
                    }

                    const videoResponse = await axios.get(videoUrlAPI, { params: videoParams });
                    const videoData = videoResponse.data;
                    console.log(videoResponse.items[0]?.statistics?.viewCount || 'N/A');
                    table.push({ Index: index +1, Title: title, 'ViewCount': viewCount, 'VideoURL' : videoUrl });
                    
                    // break;

                    // console.log(`영상제목: ${title}`);
                    // console.log(`URL주소: ${videoUrl}`);
                    // console.log(`설명: ${description}`);
                    // console.log('-'.repeat(40));
                }
    } catch (error) {
        console.error('요청실패: ', error.message);
    }
}

fetchYoutube();

const fetchYoutube_parreral = async() => {
    let nextPageToken = null;

    try {
        for (let page = 1; page <= totalPages; page++) {
            const params = {
                part: 'snippet',
                q: '아이유',
                type: 'video',
                maxResults: maxResultPerPage,
                pageToken: nextPageToken,
                key: API_KEY
            }
            
            const response = await axios.get(searchUrlAPI, { params });
            const data = response.data;

            searchResult.push(...data.items);

            // 다음 페이지의 ID;
            nextPageToken = data.nextPageToken;
            console.log('다음페이지: ', nextPageToken);
        }
        // for( let i = 0 ; i<searchResult.length; i++ ) {
            // data.items.forEach(async (item) => {
                // const item = searchResult[i];

            searchResult,map(async (item, index) => {

            })
                let title = item.snippet.title; // 영상 제목
                const videoId = item.id.videoId; // 비디오클립ID
                const videoUrl = `https://www.youtube.com/watch?v=${videoId}`; // 우리가 만든 URL
                const description = item.snippet.description; // 영상 설명
                
                //각각의 비디오 클립에 대해서 추가정보를 조회 ...
                const videoParams = {
                    part: 'statistics',
                    id: videoId,
                    key: API_KEY
                }
                //타이틀이 너무 길어서 짤라보기....
                const maxTitleLength=30;
                if (title.length > maxTitleLength) {
                    title = title.slice(0, maxTitleLength) + "...";
                }

                const videoResponse = await axios.get(videoUrlAPI, { params: videoParams });
                const videoData = videoResponse.data;
                console.log(videoResponse.items[0]?.statistics?.viewCount || 'N/A');
                table.push({ Index: index +1, Title: title, 'ViewCount': viewCount, 'VideoURL' : videoUrl });
                
                // break;

                // console.log(`영상제목: ${title}`);
                // console.log(`URL주소: ${videoUrl}`);
                // console.log(`설명: ${description}`);
                // console.log('-'.repeat(40));
            };
    } catch (error) {
        console.error('요청실패: ', error.message);
    }
}


console.time("실행시간");
// fetchYoutube_parreral();
(async () => {
    await fetchYoutube_parreral();
    console.timeEnd("실행시간");    // 타이머 종료
})
console.timeEnd("실행시간");