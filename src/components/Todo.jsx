import { useState } from "react";
import { useDispatch } from "react-redux"

const Todo = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState();
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-blue-200 rounded">
       <h2 className="mt-3 mb-6 text-6xl font-bold text-center text-blue-700 uppercase">Todo List App</h2>
       {/* Input Button */}
       <div className="Enter Your Task">
         <input
           type="text"
           placeholder="Enter Your Task"
           className="flex-grow p-2 border-b-2 border-gray-300 rounded focus:outline none focus:border-blue-500"
           name="text"
           id="addTodo"
         />
       </div>
    </div>
  )
}

export default Todo
