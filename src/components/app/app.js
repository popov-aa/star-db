import React from 'react'
import './app.css'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page/people-page";

export default class App extends React.Component {

    state = {
        isRandomPlanetVisible: false,
        hasError: false
    }

    onRandomPlanetVisibleButtonClicked = () => {
        this.setState((state) => {
            return {
                isRandomPlanetVisible: !state.isRandomPlanetVisible
            }
        })
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        const {selectedPerson, isRandomPlanetVisible, hasError} = this.state
        const randomPlanet = isRandomPlanetVisible ? <RandomPlanet/> : null;

        if (hasError) {
            return <ErrorIndicator/>
        } else {
            return (
                <div>
                    <Header/>
                    <button className="btn btn-primary" onClick={this.onRandomPlanetVisibleButtonClicked}>Toggle</button>
                    {randomPlanet}
                    <PeoplePage/>
                    <PeoplePage/>
                    <PeoplePage/>
                </div>
            )
        }
    }
}
