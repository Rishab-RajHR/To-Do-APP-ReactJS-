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
// Todo app for removing
export const removeTodo = (text) => ({
     type : REMOVE_TODO,
     palyLoad: {text}
})
// Todo app for mark completed
export const markCompleted = (text) => ({
     type : MARK_COMPLETED_TODO,
     palyLoad: {text}
})
// Todo app for markInCompleted
export const markInCompleted = (text) => ({
     type : MARK_INCOMPLETE_TODO,
     palyLoad: {text}
})
// Todo app for filtering
export const filterTodo = (filter) => ({
     type : FILTER_TODO,
     palyLoad: {filter}
})
// Todo app for Updating Search Todo
export const updateSearchTodo = (search) => ({
     type : SEARCH_TODO,
     palyLoad: {search}
})
// Todo app for Mark All Completed
export const markAllCompleted = () => ({
     type : MARK_ALL_COMPLETED_TODO,
})
