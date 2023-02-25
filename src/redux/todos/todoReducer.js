import {ADD_TODO,ALL_COMPLETED,CHANGED_TODO_COLOR,CLEAR_COMPLETED,DELETE_TODO,TOGGLED_TODO} from './actionTypes.js';
import initialState from './initialState';

const nextTodoId = (todos) =>{
    const maxId = todos.reduce((maxId, todo)=> Math.max(todo.id, maxId), 0)
    return maxId + 1 ;
}

const todoReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADD_TODO:
           return [
            ...state,
            {
                id: nextTodoId(state)
            }
           ];
        case TOGGLED_TODO :
            return state.map(todo =>{
                if(todo.id !== action.payload){
                    return todo
                }
                return {
                    ...todo,
                    completed : !todo.completed
                }
            });
        case CHANGED_TODO_COLOR:
            const {todoId, color} = action.payload;
            return state.map(todo =>{
                if(todo.id !== todoId){
                    return todo;
                }
                return {
                    ...todo,
                    color:color
                }
            });
        case DELETE_TODO:
            return state.filter(todo =>{
                return todo.id !==action.payload
            });
        case ALL_COMPLETED:
            return state.map(todo =>{
                return {
                    ...todo,
                    completed:true
                }
            });
        case CLEAR_COMPLETED:
            return state.filter(todo => !todo.completed)
    
        default:
            return state;
    }
};

export default todoReducer ;