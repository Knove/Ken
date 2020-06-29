import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const INITIAL_STATE = {
    userInfo: {}, // 用户信息
    gameList: ['test'],
};

function courses(state = INITIAL_STATE, action: { type: any; payload: any }) {
    switch (action.type) {
        case 'MERGE_DATA':
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(courses, applyMiddleware(sagaMiddleware));

export default store;
