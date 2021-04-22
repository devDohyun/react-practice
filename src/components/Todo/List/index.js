import Item from '@/components/Todo/Item'


const TodoList = props => {
    return (
        <div>
            {props.items.map(x => (
                <Item
                    title={x.title}
                    content={x.content}
                ></Item>
            ))}
        </div>
    )
}


export default TodoList