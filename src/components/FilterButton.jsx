import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTodo } from '../Redux/Action/action';

const FilterButton = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state => state.filter))
    const handleFilter = (filter) => {
        dispatch(filterTodo(filter))
    }
  return (
    <div className="flex space-x-4 items-center">
       <select
         value={}
         className="text-sm px-2 py-1 border-blue-300 focus:outline-none"
       >
        <option value='ALL'>Default</option>
        <option value='COMPLETED'>Completed</option>
        <option value='INCOMPLETE'>InCompleted</option>
       </select>
    </div>
  )
}

export default FilterButton
