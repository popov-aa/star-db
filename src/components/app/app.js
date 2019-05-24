import React from 'react'
import './app.css'
import Header from '../header'
import ItemList from '../item-list'
import RandomPlanet from '../random-planet'
import PersonDetails from '../person-details'

export default class App extends React.Component {

    state = {
        isRandomPlanetVisible: false,
        selectedPerson: null
    }

    onRandomPlanetVisibleButtonClicked = () => {
        this.setState((state) => {
            return {
                isRandomPlanetVisible: !state.isRandomPlanetVisible
            }
        })
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        })
    }

    component

    render() {
        const {selectedPerson, isRandomPlanetVisible} = this.state
        const randomPlanet = isRandomPlanetVisible ? <RandomPlanet/> : null;
        return (
            <div>
                <Header/>
                {randomPlanet}
                <button className="btn btn-primary" onClick={this.onRandomPlanetVisibleButtonClicked}>Toggle</button>
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
