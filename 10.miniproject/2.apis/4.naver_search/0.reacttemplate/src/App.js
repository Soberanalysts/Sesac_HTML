import SearchBar from './components/SearchBar'

const App = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async (query) => {
        setQuery(query);
        setError(null);

        try {
            const response = await fetch(`/search/blog?query=${encodeURIComponent(query)}`)
            const data = await response.json();
            if (data.items) {
                setResult(data.items);
                console.log(result);
            } else {
                setResult([]);
            }
        } catch (error) {
            console.log('요청실패: ', err);
        }
    }

    return (
        <div>
            <h1>네이버 블로그 검색</h1>
            <SearchBar onSearch={handleSearch}/>
            <SearchResult/>    
        </div>
        )
}

export default App;