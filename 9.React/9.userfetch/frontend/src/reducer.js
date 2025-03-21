// reducer.js: 작업에 따라 상태가 어떻게 변경되는지 처리합니다.
const initialState = {
    count: 0,
  };
  
  export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };