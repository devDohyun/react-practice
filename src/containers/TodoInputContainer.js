import TodoForm from 'components/Todo/Form'
import { useDispatch } from 'react-redux'
import { addTodoItem } from 'store/todo'


const TodoInputContainer = props => {
    const dispatch = useDispatch()
    
    
    const handleOnSubmit = payload => {
        dispatch(addTodoItem(payload))
    }
    
    
    return <TodoForm onSubmit={handleOnSubmit} />
}


export default TodoInputContainer