import {combineReducers} from 'redux';
import todoFilterReducer from './todoFilter/toFilterReducer';
import todoReducer from './todos/todoReducer';

const rootReducers = combineReducers({
    todoReducer :todoReducer,
    filterReducer: todoFilterReducer
});

export default rootReducers ;