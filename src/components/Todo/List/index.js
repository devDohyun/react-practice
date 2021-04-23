import Item from 'components/Todo/Item'


const TodoList = props => {
    const items = props.items || []
    
    
    return (
        <div>
            {items.map(x => (
                <Item
                    title={x.title}
                    content={x.content}
                ></Item>
            ))}
        </div>
    )
}


export default TodoList