import React from 'react';
import './item-list.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends React.Component {

    swapiService = new SwapiService()

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapiService.getAllPeople()
            .then((peopleList) => {
                this.setState({peopleList})
            });
    }

    renderItems = (items) => {
        const {onPersonSelected} = this.props
        return items.map(({id, name}) =>
            <li key={id} onClick={() => onPersonSelected(id)}>{name}</li>
        )
    }

    render () {
        const {peopleList} = this.state
        if (peopleList) {
            return <ul>{this.renderItems(peopleList)}</ul>
        } else {
            return <Spinner/>
        }
    }
}
