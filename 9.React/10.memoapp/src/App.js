import { useState, useEffect } from "react";
import MemoForm from './components/MemoForm';
import MemoList from "./components/MemoList";
import MemoSearch from "./components/MemoSearch";
import MemoDetail from './components/MemoDetail';
import './style.css';

function App() {
// const App = () => {

    const [memos, setMemos] = useState(() => {
        const savedMemos = localStorage.getItem('memos');
        return 
    });
    const [searchQuery, setSearchQuery] = useState(''); //검색상태

    const addMemo = (text) => {
        const newMemo = {id: Date.now(), text, completed: false };     //고유 ID와 텍스트값으로 메모 객체 생성
        setMemos([...memos, newMemo]);      //기존 메모 배열에 새 메모 추가
    }

    useEffect(() => {
        localStorage.setItem('memos', JSON.stringify(memos)); // 메모 상태를 JSON 문자열로 저장한다.
    }, [memos]); //메모가 변경될때마다
    //삭제함수 구현
    const DeleteMemo = (id) => {
        // const delMemo = data.filter((s) => )
        setMemos(memos.filter((memo) => memo.id !== id));
        //id값을 입력받고 id와 다른 값들만 반환(같은건 삭제)
    }

    //수정함수 구현
    const editMemo = (id, newText) => {
        setMemos(
            memos.map((memo) => 
                memo.id === id ? { ...memo, text: newText} : memo
            )
        );
    }
    //이전 방식으로 수정함수 구현
    const editMemoLegacy = (id, newText) => {
        const updatedMemo = [...memos];

        for (let i = 0; i < updatedMemo.length; i++) {
            if (updatedMemo[i].id === id) {
                updatedMemo[i].text = newText;
            }
        }

        setMemos(updatedMemo);
    }

    const toggleComplete = (id) => {
        setMemos(
            memos.map((memo) =>
                memo.id === id ? { ...memo, completed: !memo.completed } : memo
            )
        )
    }
    const reorderMemos = (startIndex, endIndex) => {
        // 기존 메모를 불러와서 리스트(array) 형태로 변환하고...
        // startIndex에 있는것 1개를 지움 => removed에 저장해둠
        // endIndex 위치에다가 removed 를 삽입한다.
        setMemos((prevMemos) => {
            const updatedMemos = Array.from(prevMemos);
            const [removed] = updatedMemos.splice(startIndex, 1);
            updatedMemos.splice(endIndex, 0, removed);
            return updatedMemos;
        })
    }
    
    
    
    
    
    
    
// const search =() => {

//     }
    // const filteredMemo = memos.filter((memo) => {
    //     console.log(memo);
    //     return memo.text.toLowerCase().includes(searchQuery.toLowerCase())
    // })

    return (
        <div>
            <h1>메모앱 (투두리스트)</h1>
            <MemoSearch search={setSearchQuery}/>

            {/* 개별 컴포넌트로 만들기 */}
            {/* 검색함수를 구현한다 */}
            {/* 검색 내용을 담은 상태변수를 만든다 */}
            {/* 필터된 내용 MemoList에 전달 */}

            {/* MemoSort */}
            <select>
                <option>최신순</option>
                <option>오래된 순</option>
                <option>알파벳순</option>
            </select>

            <MemoForm addMemo={addMemo}/>
            <MemoList 
                memos={memos} 
                // memos={filteredMemo} 
                deleteMemo={DeleteMemo} 
                editMemo={editMemo}
                toggleDone={toggleComplete}
                reorderMemos={reorderMemos}
                />
        </div>
    );
}

export default App;
