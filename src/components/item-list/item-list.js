import React from 'react';
import './item-list.css'
import SwapiService from '../../services/swapi-service';
import {withData} from '../hoc-helpers'

const ItemList = (props) => {
    const {onPersonSelected, children, data} = props
    const items = data.map((item) =>
        <li key={item.id} onClick={() => onPersonSelected(item.id)}>{children(item)}</li>
    )
    return <ul>{items}</ul>
}

const {getAllPeople} = new SwapiService()
export default withData(ItemList, getAllPeople);