import TodoForm from 'components/Todo/Form'


const TodoInputContainer = props => {
    const handleOnSubmit = payload => {
        console.log(payload);
    }
    
    
    return <TodoForm onSubmit={handleOnSubmit} />
}


export default TodoInputContainer