import React from 'react'
import TodoList from 'components/Todo/List'
import { useSelector } from 'react-redux'


const TodoContainer = () => {
    const items = useSelector(state => state.todo.items)

    
    return <TodoList items={items} />
}


export default TodoContainer