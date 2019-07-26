import React from 'react';
import './item-details.css'
import SwapiService from "../../services/swapi-service";

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
}

export {
    Record
}

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
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
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
                        <h4>{item.name}</h4>
                        <ul className="list-group list-group-flush">
                            {React.Children.map(this.props.children, (child) => {return React.cloneElement(child, {item})})}
                        </ul>
                    </div>
                </div>
            );
        } else {
            return <span>Select item.</span>
        }
    }

}
