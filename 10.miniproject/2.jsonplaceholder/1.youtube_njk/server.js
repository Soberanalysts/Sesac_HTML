require('dotenv').config();
const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const app = express();
const PORT = 3000;
const API_KEY = process.env.YOUTUBE_API_KEY;


nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.set('view engine', 'html');

//미들웨어 설정
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/search', async(req, res) => {
    // 여기에서 실제로 youtube 검색해서 결과
    const url = "https://www.googleapis.com/youtube/v3/search";

    const params = {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 10,
        key: API_KEY
    }
    try {
        const response = await axios.get(url, { params });
        const videos = response.data.items.map(item => ({
            videoId: item.id.videoId, //유튜브 비디오 ID
            title: item.snippet.title, //영상제목
            description: item.snippet.description, //영상 설명
            thumbnailUrl: item.snippet.thumbnails.default.url, //썸네일 URL(작은사이즈)
        }))
        console.log(videos);
        res.render('index', { videos });
    } catch (error) {
        // console.log("DIE");
        console.error('요청오류: ', error.message)
        return res.status(500).send('알 수 없는 서버 오류');
    }
    // axios 로 요청한다. 결과 목록을 이쁘게 json으로 처리한다.
    // res.render('index', {검색결과넘겨주기});
});
function decodeHtmlEntities(text) {
    const entities = {
        '&#39;': "'", //single quote
        '&quot;': '"', //double quote
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
    };
    return text.replae(/&#39;|&quot;|&amp;|&lt;|&gt;/g, match => entites[match] || match);
}
app.get('/play', (req, res) => {
    const videoId = req.query.videoId;
    const videos = decodeURIComponent(req.query.videos || '[]');
    console.log(videos);

    const selectVideo = videos.find((video => video.videoId === videoId));
    res.render('index', { videos, selectVideo });
})

app.listen(PORT, () => {
    console.log('서버 레디');
});

