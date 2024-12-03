import {useState } from "react";
const App = () => {
    const [data, setData] = useState(null);

    const loadData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
        const result = await response.json();
        setData(result);
    }

    return (
        <div style={{ padding: "20px"}}>
            <button onClick={loadData}>Load Data</button>

            {/*결과를 출력할 공간*/}
            <div style={{ marginTop: "20px"}}>
                {data ? (
                    <div>
                        <h3>{data.title}</h3>
                        <p>{data.body}</p>
                    </div>

                ) : (
                    <p>No data loaded.</p>
                )}

                결과를 출력할 곳
            </div>
        </div>
    );
}

export default App;