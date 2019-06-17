import React from 'react';
import './item-details.css'
import SwapiService from "../../services/swapi-service";

export default class ItemDetails extends React.Component {

    swapiService = new SwapiService()

    state = {
        item: null,
        image: null
    }

    updateItem () {
        const {itemId, getData, getImageUrl} = this.props
        if (itemId) {
            getData(itemId).then(item => {this.setState({item, image: getImageUrl(item)})})
        }
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem()
        }
    }

    render () {
        const {item, image} = this.state

        if (item) {
            return (
                <div className="item-details card">
                    <img className="item-image" src={image} alt="item image"/>
                    <div className="card-body">
                        <b>{item.name}</b>
                    </div>
                </div>
            );
        } else {
            return <span>Select item.</span>
        }
    }

}
