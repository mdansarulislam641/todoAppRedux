import { STATUS_CHANGED, COLOR_CHANGED } from "./actionType";

// status changed 
export const status_changed = (status) =>{
    return {
        type:STATUS_CHANGED,
        payload:status
    }
};

// color changed
export const colorChanged = (color , changedType) =>{
    return{
        type:COLOR_CHANGED,
        payload:{
            color,
            changedType
        }
    }
}