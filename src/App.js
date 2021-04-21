import './styles/index.scss'

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from 'components/Nav'
import { Home, TodoList } from './pages'

const App = () => {
    return (
        <div id="app">
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/todo-list" component={TodoList} exact />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App