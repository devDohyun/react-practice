import React from 'react'

class Item extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>{this.props.title}</div>
        )
    }
}

export default Item