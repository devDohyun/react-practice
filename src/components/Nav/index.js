import './index.scss'

import { Link } from 'react-router-dom'

function Nav() {
    return (<nav>
        <div>My React Practice</div>
        <Link to="/">들어가며</Link>
        <Link to="/todo-list">Todo List</Link>
    </nav>)
}

export default Nav