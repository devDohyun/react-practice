import './index.scss'

import { Link } from 'react-router-dom'

function Nav() {
    return (<div id="nav">
        <div className="nav-content">
            <Link to="/" className="logo">
                My React Practice
            </Link>
            <nav>
                <Link to="/">들어가며</Link>
                <Link to="/todo-list">Todo List</Link>
            </nav>
        </div>
    </div>)
}

export default Nav