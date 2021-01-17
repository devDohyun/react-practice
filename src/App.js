import React from 'react'

import Item from './Practice/Item'


const App = () => {
    const items = [
        {
            title: '첫번째'
        },
        {
            title: '두번째'
        },
        {
            title: '세번째'
        },
    ]
    
    return (
        <div id="app">
            <div>My React Practice</div>
            <div className="item-wrapper">
                {items.map(x => (<Item
                    key={x.title}
                    title={x.title}
                />))}
            </div>
        </div>
    )
}

export default App