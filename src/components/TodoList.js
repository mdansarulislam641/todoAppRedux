import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';
const TodoList = () => {
    const todoItem = useSelector((state)=>state.todoReducer);
    const filters = useSelector(state => state.filterReducer);
    const {status, color:colors} = filters ;
    return (
        <div
                class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
            >
             {todoItem
             .filter((todo)=> {
                switch (status) {
                    case "Complete":
                        return todo.completed
                    case "Incomplete":
                        return !todo.completed
                    default:
                        return true
                }
             }).filter(todo=>{
                if(colors.length > 0){
                    return colors.includes(todo?.color)
                }
                return true
             })
             .map(todo=><Todo 
                todo={todo}
                key={todo.id}
             />)}
             
            </div>
    );
};

export default TodoList;