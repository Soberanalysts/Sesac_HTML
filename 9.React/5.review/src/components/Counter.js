import { useEffect } from "react";

const Counter = ({ count, setCount }) => {

    const incHandler = () => setCount(count + 1);
    const decHandler = () => setCount(count - 1);


    //여기에는, 특정 변수값이 바꼈을떄 하고싶은 행동 정의
    useEffect(() => {
        console.log(`카운트변수 변경됨 : ${count}`);

        //Cleanup 함수 : 이 변화가 발생했을 때 선행해서 실행할 것
        return () => {
            console.log('나는 클린업함수');
        };
    }, [count]); 

    return(
        <div>
            <h2>카운터</h2>
            <p>변수값 : {count}</p>
            <button onClick={incHandler}>+1 증가</button>
            <button onClick={decHandler}>-1 감소</button>
        </div>
    );
}

export default Counter;