const SearchResult = ({result}) => {
    return (
        <ul>
            {result.map((item, index) => (
                <li key={index}>
                    <a href={item.link} target="blank">
                        <h3>{item.title}</h3>
                    </a>
                    <p>{item.description}</p>
                    <p>{item.postdate}</p>
                </li>
            ))}
            {/* <form>
            <input type="text" placeholder="검색어..." value={inputValue}/>
            <button type="submit">검색</button>
        </form> */}d
        </ul>
    )
}
export default SearchResult;