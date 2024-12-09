import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        게시판
      </header>
      <table>
        <thead >
              <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>내용</th>
                  <th>썸네일</th>
                  <th>작성일</th>
                  <th>삭제</th>
              </tr>
        </thead>
          <tbody>
          </tbody>
      </table>
      <button>글작성</button>
    </div>
  );
}

export default App;
