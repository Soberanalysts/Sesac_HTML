import axios from 'axios';
import { useState, useEffect } from 'react';

const YoutubeApp = () => {
    const [videos, setVideos] = useState([]);

    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    const BASE_URL = 'https://www.googleapis.com/youtube/v3/videos';

    useEffect(() => {
        const fetchYoutube = async () => {
            try {
                const response = await axios.get(`${BASE_URL}`, {
                    params: {
                        part: 'snippet,contentDetails,statistics',
                        chart: 'mostPopular',
                        regionCode: 'KR',
                        maxResults: 10,
                        key: API_KEY,
                    }
                });

                setVideos(response.data.items);
                // console.table(response.data.items);
                // console.table(response.data.items.map((video) => video.snippet.title, video.statistics.view));
            } catch (error) {
                console.log('에러', error);
            }
        }
        
        fetchYoutube();
    }, [API_KEY])

    
    return (
        <div>
            <h1>유튭 현재 실시간 탑 10 랭킹</h1>
            <ul>

                {videos.map((video) => (
                    <li key={video.id}>
                        <h2>{video.snippet.title}</h2>
                        <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title}></img>
                        <p>{video.snippet.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default YoutubeApp;