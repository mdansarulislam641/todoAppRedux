import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorChanged, status_changed } from '../redux/todoFilter/actionCreator';

const Footer = () => {
    const todoItem = useSelector(state => state.todoReducer);
    // filter todo 
    const filterItem = useSelector(state =>state.filterReducer);
    const {status, color : colors} = filterItem ;
    const dispatch = useDispatch();
    // number of todo
    const todoRemaining = (number_of_to) =>{
        switch (number_of_to) {
            case 0:
                return "no task";
            case 1 :
                return "1 task"
        
            default:
               return number_of_to +" " + "tasks"
        }
    };

    // changed status 
    const handleChangedStatus = (status) =>{
        dispatch(status_changed(status));
    };

    // color change 
    const handleColorChange = ( color ) =>{
        if(colors.includes(color)){
           return dispatch(colorChanged(color , "removed"))
        }
        return dispatch(colorChanged(color , 'added'))

    }

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{todoRemaining(todoItem.length)} left</p>
        <ul className="flex space-x-1 items-center text-xs">
            <li onClick={()=>handleChangedStatus("All")}
             className={`cursor-pointer  ${status === "All" && "font-bold" }`}>All</li>
            <li>|</li>
            <li onClick={()=>handleChangedStatus("Incomplete")}  className={`cursor-pointer  ${status === "Incomplete" && "font-bold" }`}>Incomplete</li>
            <li>|</li>
            <li onClick={()=>handleChangedStatus("Complete")}  className={`cursor-pointer  ${status === "Complete" && "font-bold" }`}>Complete</li>
            <li></li>
            <li></li>
            <li onClick={()=>handleColorChange("green")}
                className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes("green") && 'bg-green-500'}`}
            ></li>
            <li onClick={()=>handleColorChange("red")}
                className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}
            ></li>
            <li onClick={()=>handleColorChange("yellow")}
                className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && "bg-yellow-500"}`}
            ></li>
        </ul>
    </div>
    );
};

export default Footer;