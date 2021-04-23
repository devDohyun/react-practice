const TYPE_ADD_TODO_ITEM = 'ADD_TODO_ITEM'
const TYPE_REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM'


export const addTodoItem = () => ({ type: TYPE_ADD_TODO_ITEM })
export const removeTodoItem = () => ({ type: TYPE_REMOVE_TODO_ITEM })


const initialState = {
    items: []
}


const todo = (state = initialState, action) => {
    switch (action.type) {
        case TYPE_ADD_TODO_ITEM:
            return {
                ...state,
                items: state.items.concat(action.item)
            }
        case TYPE_REMOVE_TODO_ITEM:
            const items = [...state.items]
            items.splice(action.idx, 1)
            
            
            return {
                ...state,
                items
            }
        default:
            return state
    }
}


export default todo