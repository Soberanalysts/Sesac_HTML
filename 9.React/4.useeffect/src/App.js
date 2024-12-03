import { useState, useEffect } from "react";
import './App.css'; 
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
    const [loading, setLoading] = useState(false);
    const [clearing, setClearing] = useState(false);
    const [count, setCount] = useState(1);
    const [data, setData] = useState(null);

    const loadData = async () => {
        setLoading(true);


        await new Promise((resolve) => setTimeout(resolve, 1000));
        //1~10까지 랜덤으로
        const randomId = Math.floor(Math.random() *100) +1;
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}`);
            const result = await response.json();
            setData(result);
            // setLoading(false);
        } catch {
            setData({error:true});
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, [count]); 
    //지켜볼 변수, 이 변수가 변경될때마다, 이 함수 안의 내용을 실행해라..
    //이 변수가 변경되었을떄 발생하는 side-effect를 해결하기 위한 함수를 정의하는곳..
    //[] <-- 이거의 의미는, 최초 한번만 실행한다. count일때 count가 변할때 마다 실행

    //loadData();
    const clearHandler = async () => {
        setClearing(true);
        console.log('클리어 클릭됨');

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setData(null);
        setClearing(false);
    }


    return (
        // <div style={{ padding: "20px"}}>
        <div className="container my-4">
            <button 
                className="btn btn-primary" 
                onClick={() => setCount(count+1)} 
                disabled={loading || clearing}>Load Data ({count})
            </button>

            <button 
                className="btn btn-danger ms-2" 
                // onClick={clearHandler, setCount(0)} 
                onClick={() => {
                    clearHandler(); 
                    setCount(0);
                }}
                disabled={clearing || loading || data === null}>clear ({count})
            </button>
            {/* <div>
                data? () : 

            </div> */}
            
            {/*결과를 출력할 공간*/}
            {/* <div className="mt-4" style={{ marginTop: "20px"}}> */}
            <div className="mt-4">
                {data ? (
                    data.error ? (
                        <p> 데이터 로딩에 실패했습니다</p>
                    ) : (
                        <div>
                            <h3>{data.title}</h3>
                            <p>{data.body}</p>
                        </div>
                    )
                ) : (
                    <p>No data loaded.</p>
                )}

                결과를 출력할 곳
            </div>
        </div>
    );

    
}

export default App;