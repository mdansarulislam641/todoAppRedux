import { COLOR_CHANGED, STATUS_CHANGED } from "./actionType";
import initialState from "./initialState";

const todoFilterReducer = (state = initialState, action) =>{
    switch (action.type) {
        case STATUS_CHANGED:
            return {
                ...state, 
                status : action.payload
            }
        case COLOR_CHANGED:
            const {color , changedType} = action.payload ;
            switch(changedType){
                case "added":
                    return {
                        ...state ,
                        color: [...state.color , color]
                    }
                case 'removed':
                    return {
                        ...state,
                        color : state.color.filter(cl => cl !== color)
                    }
                default : return state
            }


        default:
            return state ;
    }
};

export default todoFilterReducer ;