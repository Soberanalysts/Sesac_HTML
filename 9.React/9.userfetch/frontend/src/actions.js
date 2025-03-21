// Redux는 대규모 애플리케이션의 상태를 관리하는 데 적합하며 간단한 카운터 애플리케이션을 만드는 것이 좋은 시작점입니다. 
//다음은 액션, 리듀서, 저장과 같은 Redux의 핵심 개념을 이해하기 위해 구축할 수 있는 기본 예입니다.

// 1. Redux 설치: 먼저 Yarn 또는 npm을 사용하여 redux 및 react-redux를 설치해야 합니다.
// npm install redux react-redux

// 2. 카운터 예시 생성:
// Redux 카운터의 최소 설정은 다음과 같습니다.

// actions.js: 액션 유형을 정의합니다.

// actions.js
export const increment = () => {
    return {
        type: 'INCREMENT',
      };
    };
    
    export const decrement = () => {
      return {
        type: 'DECREMENT',
      };
    };






