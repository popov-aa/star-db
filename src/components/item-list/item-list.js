import React from 'react';
import PropTypes from 'prop-types'
import './item-list.css'

const ItemList = (props) => {
    const {onItemSelected, children, data} = props
    const items = data.map((item) =>
        <li key={item.id} onClick={() => onItemSelected(item.id)}>{children(item)}</li>
    )
    return <ul>{items}</ul>
}

ItemList.defaultProps = {
    onItemSelected: () => {}
}
ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
}

export default  ItemList;