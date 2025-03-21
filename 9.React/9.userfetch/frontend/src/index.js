// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// // 리액트 18부터의 문법
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// index.js   Redux Provider에 앱을 래핑하여 스토어 전체에 액세스할 수 있도록 합니다.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import CounterComponent from './CounterComponent';

ReactDOM.render(
  <Provider store={store}>
    <CounterComponent />
  </Provider>,
  document.getElementById('root')
);

// Redux 작업, 감소기 및 저장을 사용하여 카운터를 늘리거나 줄일 수 있는 Redux를 사용하여 기본 카운터 앱을 설정합니다