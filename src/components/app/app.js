import React from 'react'
import './app.css'
import Header from '../header'
import ItemList from '../item-list'
import RandomPlanet from '../random-planet'
import PersonDetails from '../person-details'

export default class App extends React.Component {

    state = {
        selectedPerson: null
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        })
    }

    render() {
        const {selectedPerson} = this.state
        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onPersonSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}
