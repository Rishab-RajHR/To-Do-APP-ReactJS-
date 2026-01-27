import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

const List = () => {
   const filterTodos = useSelector((state) => {
       return state.todos;
   });
   const filter = useSelector((state) => {
       return state.filter;
   });
   const search = useSelector((state) => {
       return state.search;
   });
   const filteredTodos = useMemo(() => {
      return filterTodos.filter((todo) => {
          const matchFilter = (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed) || (filter === 'ALL');
        const matchSearch = todo.text.toLowerCase().includes(search);
        return matchFilter && matchSearch;
      });
   }, [filterTodos, filter, search])
   return(
    <ul>
        {
            
        }
    </ul>
   )
}

export default List
