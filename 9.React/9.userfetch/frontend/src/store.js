// store.js : 상태 트리를 보유하는 Redux 저장소를 생성합니다.
import { createStore } from 'redux';
import { counterReducer } from './reducer';

export const store = createStore(counterReducer);