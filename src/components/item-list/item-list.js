import React from 'react';
import './item-list.css'
import Spinner from "../spinner";

export default class ItemList extends React.Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props
        getData()
            .then((itemList) => {
                this.setState({itemList})
            });
    }

    renderItems = (items) => {
        const {onPersonSelected} = this.props
        return items.map(({id, name}) =>
            <li key={id} onClick={() => onPersonSelected(id)}>{name}</li>
        )
    }

    render () {
        const {itemList: peopleList} = this.state
        if (peopleList) {
            return <ul>{this.renderItems(peopleList)}</ul>
        } else {
            return <Spinner/>
        }
    }
}
