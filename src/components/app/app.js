import React from 'react'
import './app.css'
import Header from '../header'
import ItemList from '../item-list'
import RandomPlanet from '../random-planet'
import SwapiService from '../../services/swapi-service';
import DummySwapiService from "../../services/dummy-swapi-service";
import ErrorBoundry from '../error-boundry/error-boundry';
import {
    PersonList,
    StarshipList,
    PlanetList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components';
import {SwapiServiceProvider} from "../swapi-service-context";

const Row = ({left, right}) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    );
}
export default class App extends React.Component {

    state = {
        swapiService: new SwapiService(),
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

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService
            console.log(`SwapiService changed to ${Service.name}`)
            return {swapiService: new Service()}
        })
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        })
    }

    render() {
        const {selectedPerson, isRandomPlanetVisible} = this.state
        const randomPlanet = isRandomPlanetVisible ? <RandomPlanet/> : null;

        return (
            <div>
                <button className="btn btn-primary" onClick={this.onRandomPlanetVisibleButtonClicked}>Toggle</button>
                {randomPlanet}

                <ErrorBoundry>
                    <SwapiServiceProvider value={this.state.swapiService}>
                        <Header onServiceChange={this.onServiceChange}/>
                        <PersonList/>
                        <StarshipList/>
                        <PlanetList/>
                    </SwapiServiceProvider>
                </ErrorBoundry>
            </div>
        )
    }
}
