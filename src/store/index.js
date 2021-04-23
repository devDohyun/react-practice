import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import todo from './todo'


const rootReducer = combineReducers({
    todo
})


const store = createStore(rootReducer, devToolsEnhancer())


export default store