import { ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETED_TODO, MARK_COMPLETED_TODO, MARK_INCOMPLETE_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TODO } from "./actionTypes"
// Todo app for adding files
export const addTodo = (text) => ({
     type : ADD_TODO,
     palyLoad: {text}
})
// Todo app for toggling
export const toggleTodo = (text) => ({
     type : TOGGLE_TODO,
     palyLoad: {text}
})
export const removeTodo = (text) => ({
     type : REMOVE_TODO,
     palyLoad: {text}
})
export const markCompleted = (text) => ({
     type : MARK_COMPLETED_TODO,
     palyLoad: {text}
})
export const markInCompleted = (text) => ({
     type : MARK_INCOMPLETE_TODO,
     palyLoad: {text}
})
export const filterTodo = (filter) => ({
     type : FILTER_TODO,
     palyLoad: {filter}
})
export const updateSearchTodo = (search) => ({
     type : SEARCH_TODO,
     palyLoad: {search}
})
export const markAllCompleted = () => ({
     type : MARK_ALL_COMPLETED_TODO,
})
