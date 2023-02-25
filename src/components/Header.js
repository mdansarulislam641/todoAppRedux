import React, { useState } from 'react';
import noteImg from '../assets/images/notes.png';
import doubleTickImage from '../assets/images/double-tick.png';
import bgImage from '../assets/images/plus.png';
import { useDispatch } from 'react-redux';
import { addedTodo, allCompleted, clearCompleted } from '../redux/todos/actionCreators';
const Header = () => {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    // handle submit form data 
    const handleSubmit = event =>{
        event.preventDefault();
        if(!inputData){
            return alert("must be added any todo text")
        }
        dispatch(addedTodo(inputData));
        setInputData("")
    }

    // all completed
    const handleCompleted = () =>{
        dispatch(allCompleted());
    };

    // clear all completed task
    const handleClear = () =>{
        dispatch(clearCompleted())
    }

    return (
        <div>
        <form onSubmit={handleSubmit}
            class="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        >
            <img
                src={noteImg}
                class="w-6 h-6"
                alt="Add todo"
            />
            <input 
                onChange={(e)=>setInputData(e.target.value)}
                type="text"
                value={inputData}
                placeholder="Type your todo"
                class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            />
            <button
                type="submit"
                class={`appearance-none w-8 h-8 bg-[url('${bgImage}')] bg-no-repeat bg-contain`}
            ></button>
        </form>

        <ul class="flex justify-between my-4 text-xs text-gray-500">
            <li class="flex space-x-1 cursor-pointer" onClick={handleCompleted}>
                <img
                    class="w-4 h-4"
                    src={doubleTickImage}
                    alt="Complete"
                />
                <span>Complete All Tasks</span>
            </li>
            <li onClick={handleClear} class="cursor-pointer">Clear completed</li>
        </ul>
    </div>
    );
};

export default Header;