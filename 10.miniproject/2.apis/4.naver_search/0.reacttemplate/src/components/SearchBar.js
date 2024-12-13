import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(inputValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* 기본 인자가 e */}
            <input 
                type="text" 
                placeholder="검색어..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">검색</button>
        </form>
    )
}

export default SearchBar;