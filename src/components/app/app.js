import React from 'react'
import './app.css'
import Header from '../header'
import RandomPlanet from '../random-planet'
import SwapiService from '../../services/swapi-service';
import DummySwapiService from "../../services/dummy-swapi-service";
import ErrorBoundry from '../error-boundry/error-boundry';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages'

import {SwapiServiceProvider} from "../swapi-service-context";

export default class App extends React.Component {

    state = {
        swapiService: new SwapiService()
    }

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService
            console.log(`SwapiService changed to ${Service.name}`)
            return {swapiService: new Service()}
        })
    }

    render() {
        return (
            <div>
                <ErrorBoundry>
                    <SwapiServiceProvider value={this.state.swapiService}>
                        <RandomPlanet/>
                        <Header onServiceChange={this.onServiceChange}/>
                        <PeoplePage/>
                        <PlanetsPage/>
                        <StarshipsPage/>
                    </SwapiServiceProvider>
                </ErrorBoundry>
            </div>
        )
    }
}
