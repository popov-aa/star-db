import React from 'react'
import './app.css'
import Header from '../header'
import ItemList from '../item-list'
import RandomPlanet from '../random-planet'
import ItemDetails from '../item-details'
import SwapiService from '../../services/swapi-service';
import PeoplePage from '../people-page/people-page';
import ErrorBoundry from '../error-boundry/error-boundry';

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

    swapiService = new SwapiService();

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

    render() {
        const {selectedPerson, isRandomPlanetVisible} = this.state
        const randomPlanet = isRandomPlanetVisible ? <RandomPlanet/> : null;

        const peopleList = (
            <ItemList
                getData={this.swapiService.getAllPeople}
                onPersonSelected={this.onPersonSelected}
            >
                {({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}
            </ItemList>
        );

        const personDetails = (
            <ItemDetails
                getData={this.swapiService.getPerson}
                getImageUrl={this.swapiService.getPersonImage}
                itemId={11}
            />
        );
        const starshipDetails = (
            <ItemDetails
                getData={this.swapiService.getStarship}
                getImageUrl={this.swapiService.getStarshipImage}
                itemId={11}
            />
        );

        return (
            <div>
                <Header/>
                {randomPlanet}
                <button className="btn btn-primary" onClick={this.onRandomPlanetVisibleButtonClicked}>Toggle</button>
                <ErrorBoundry>
                    <Row left={personDetails} right={starshipDetails}/>
                </ErrorBoundry>
            </div>
        )
    }
}
