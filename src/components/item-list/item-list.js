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
        const {onPersonSelected, renderItem} = this.props
        return items.map((item) =>
            <li key={item.id} onClick={() => onPersonSelected(item.id)}>{renderItem(item)}</li>
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
