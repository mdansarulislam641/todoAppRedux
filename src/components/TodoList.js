import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';
const TodoList = () => {
    const todoItem = useSelector((state)=>state.todoReducer);

    return (
        <div
                class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
            >
             {todoItem?.map(todo=><Todo 
                todo={todo}
                key={todo.id}
             />)}
             
            </div>
    );
};

export default TodoList;