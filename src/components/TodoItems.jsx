import { useDispatch } from "react-redux"

const TodoItems = ({todo, index}) => {
  const dispatch = useDispatch();
  return (
    <li className="flex flex-col md:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
       <div className="flex items-center flex-wrap">
          <span className="mr-4 text-blue-500">{index+1}</span>
          <span className={`mr-4 ${todo.completed ? "line-through text-blue-500" : ""}`}> {todo.text}</span>
       </div>
       <div className="flex space-x-3 ml-8">
        <button 
         onClick={() => dispatch(toggleTodo(index))}
        className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded">
          {
             todo.completed ? 
          }
        </button>
       </div>
    </li>
  )
}

export default TodoItems
