import { combineReducers, createStore } from 'redux'
import todo from './todo'


const rootReducer = combineReducers({
    todo
})


const store = createStore(rootReducer)

console.log(store);
export default store