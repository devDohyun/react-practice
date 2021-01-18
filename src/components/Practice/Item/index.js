import React from 'react'
import PropTypes from 'prop-types'

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

Item.propTypes = {
    title: PropTypes.string
}

export default Item