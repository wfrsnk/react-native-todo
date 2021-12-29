import { CREATE_TASK, SET_COMPLETED_FLAG, DELETE_TASK, SET_FILTER } from "./types";

const initialState = {
    tasks: [],
    filter: 'all'
};

export const listReducer = (state = initialState, action) => {
    switch(action.type){

        case CREATE_TASK:
            return {...state, tasks: state.tasks.concat([action.payload])};

        case SET_COMPLETED_FLAG:
            return {
                ...state, 
                tasks: state.tasks.map(item => {
                    if (item.key === action.payload){
                        item.completed = !item.completed;
                    } 
                    return item;    
                })
            }

        case DELETE_TASK:
            return {
                ...state, 
                tasks: state.tasks.filter(el => el.key != action.payload)
            }

        case SET_FILTER:
            return { ...state, filter: action.payload };

        default: return state;
    }
}