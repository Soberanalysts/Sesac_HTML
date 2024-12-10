import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const YoutubeApp = () => {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');

    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
    const VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos';
    let link;

    const handleSearch = async() => {
            try {
                // let tables={};
                
                const response = await axios.get(`${BASE_URL}`, {
                    params: {
                        part: 'snippet',
                        q: query,
                        maxResults: 11,
                        key: API_KEY,
                    }
                });
                // 
                const videoIds = response.data.items
                .map((item) => item.id.videoId) // Get videoId from each result
                .filter((id) => id); // Remove undefined values (e.g., playlists)
                console.log(response.data.items);
                // table.index = response.data.index + 1;
                // table.Title = response.data.map((video) => video.snippet.title);
                
                // if (videoIds.length > 0) {
                    const videoResponse = await axios.get(`${VIDEOS_URL}`, {
                        params: {
                            part: 'snippet,contentDetails,statistics',
                            id: videoIds.join(','), // Pass video IDs as a comma-separated string
                            key: API_KEY,
                        },
                    });
                    console.log(videoResponse.data.items);
                    console.log(videoResponse.data);

                    const tables = videoResponse.data.items.map((video, idx) => ({
                        Index: idx + 1, // Start index at 1
                        Title: video.snippet.title, // Video title
                        View_Count : video.statistics.viewCount,
                        Video_URL : `https://www.youtube.com/watch?v=${video.id}`,
                    }));
                    link=videoResponse.data.items.map((video)=>(video.id));
                    console.log('링크',link);

                    // tables.Index = videoResponse.data.index + 1;
                    // tables.Title=videoResponse.data.items.map((item)=> item.snippet.title);
                    console.table(tables);
                // }

                // const table = response.data.items.map((video, idx) => ({
                //     Index: idx + 1, // Start index at 1
                //     Title: video.snippet.title, // Video title
                //     View_Count : video.statistics.viewCount,
                //     // Video_URL : 
                // }));
                // const videoResponse = await axios.get(`${VIDEOS_URL}`, {
                //     params: {
                //         part: 'snippet,contentDetails,statistics',
                //         id: videoIds.join(','), // Pass video IDs as a comma-separated string
                //         key: API_KEY,
                //     },
                // });

                setVideos(response.data.items);
                // console.table(response.data.items.map((video) => video.snippet.title));
                // console.table(table);
                
            } catch (error) {
                console.log('에러', error);
            }
    }
    
    return (
        <div>
            <h1>유튭 검색기</h1>
            <SearchBar query={query} onInputChange={setQuery} onSearch={handleSearch} />
            <VideoList videos={videos} link={link}/>
        </div>
    )
}

export default YoutubeApp;