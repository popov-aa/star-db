import React from 'react';
import './item-list.css'

const ItemList = (props) => {
    const {onItemSelected, children, data} = props
    const items = data.map((item) =>
        <li key={item.id} onClick={() => onItemSelected(item.id)}>{children(item)}</li>
    )
    return <ul>{items}</ul>
}

export default  ItemList;