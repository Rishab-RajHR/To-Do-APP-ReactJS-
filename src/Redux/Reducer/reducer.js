import { ADD_TODO, TOGGLE_TODO } from "../Action/actionTypes"

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
             }],
             filter: state.filter,
             search: state.search
          }
          case TOGGLE_TODO
           return {
                todos: state.todos.map((todo, index)=> index === action.payLoad.id ? 
                 {...todo, completed: !todo.completed} : todo
               ),
               filter: state.filter,
               search: state.search
          }
     }
}