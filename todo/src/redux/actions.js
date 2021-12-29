import { CREATE_TASK, SET_COMPLETED_FLAG, DELETE_TASK, SET_FILTER } from "./types";

export function createTask(task) {
    return {
        type: CREATE_TASK,
        payload: task
    }
} 

export function deleteTask(key) {
    return {
        type: DELETE_TASK,
        payload: key
    }
} 

export function setCompleted(key) {
    return {
        type: SET_COMPLETED_FLAG,
        payload: key
    }
} 

export function setFilter(value) {
    return {
        type: SET_FILTER,
        payload: value
    }
} 

