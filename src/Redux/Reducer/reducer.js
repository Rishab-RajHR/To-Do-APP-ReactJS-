import { ADD_TODO } from "../Action/actionTypes"

const initialState = {
    todos: [],
    filter: 'ALL',
    search: ''
}

const todoReducer = (state = initialState, action) => {
     switch(action.type){
        case ADD_TODO
          return {
             todos: [...state.todos, {
                text: action.payLoad.text, completed: false
             }]
          }
     }
}