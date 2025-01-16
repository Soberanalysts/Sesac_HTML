import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

function App() {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = async (event) => {
    try {
        
        const response = await axios.get(`/search/blog?query=${encodeURIComponent(query)}`);
        const data = await response.json();

        setVideos(response.data.items);

        
    } catch (error) {
        console.log('에러', error);
    }
}
  return (
    <div>
    <h1>유튭 검색기</h1>
    <SearchBar query={query} onInputChange={setQuery} onSearch={handleSearch} />
    {/* <SearchResult videos={videos} link={link}/> */}
</div>
  );
}

export default App;
