import { ADD_TODO , ALL_COMPLETED, CHANGED_TODO_COLOR, CLEAR_COMPLETED,DELETE_TODO, TOGGLED_TODO} from "./actionTypes"

// add new todo
export const addedTodo = (todoText) =>{
    return {
        type:ADD_TODO,
        payload : todoText
    }
};

// delete todo
export const deleteTodo = (todoId) =>{
    return{
        type:DELETE_TODO,
        payload:todoId
    }
};

// toggle todo
export const toggledTodo = (todoId) =>{
    return {
        type:TOGGLED_TODO,
        payload: todoId
    }
};

// color selected
export const colorSelected = (todoId, color) =>{
    return {
        type:CHANGED_TODO_COLOR,
        payload : {
            todoId,
            color
        }
    }
};

// all completed
export const allCompleted = () =>{
    return {
        type:ALL_COMPLETED
    }
};

// clear completed
export const clearCompleted = () =>{
    return {
        type:CLEAR_COMPLETED
    }
};