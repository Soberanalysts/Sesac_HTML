import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

function App() {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('');

  const API_KEY = process.env.NAVER;

  const handleSearch = async() => {
    try {
        
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

        const videoResponse = await axios.get(`${VIDEOS_URL}`, {
                params: {
                    part: 'snippet,contentDetails,statistics',
                    id: videoIds.join(','), // Pass video IDs as a comma-separated string
                    key: API_KEY,
                },
        });


        setVideos(response.data.items);

        
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
  );
}

export default App;
