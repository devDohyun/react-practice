import TodoListContainer from 'containers/TodoListContainer'
import TodoInputContainer from 'containers/TodoInputContainer'


function TodoList() {
    return (
        <div className="page-container">
            <TodoInputContainer />
            <TodoListContainer />
        </div>
    )
}


export default TodoList