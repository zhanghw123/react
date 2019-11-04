import * as types from './action-types'

let nextTodoId = 0
export const actions = {
    addTodo(text) {
        return {
            type: types.ADD_TODO,
            id: nextTodoId++,
            text
        }
    },
    toggleTodo(id){
        return {
            type: types.TOGGLE_TODO,
            id
        }
    } ,
     setVisibilityFilter (filter) {
        return {
            type: 'SET_VISIBILITY_FILTER',
            filter
        }
    }
}
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

