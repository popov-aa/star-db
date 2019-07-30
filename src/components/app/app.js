import React from 'react'
import './app.css'
import Header from '../header'
import RandomPlanet from '../random-planet'
import SwapiService from '../../services/swapi-service';
import DummySwapiService from "../../services/dummy-swapi-service";
import ErrorBoundry from '../error-boundry/error-boundry';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages'
import {SwapiServiceProvider} from "../swapi-service-context";
import {BrowserRouter, Route} from 'react-router-dom'

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
                        <BrowserRouter>
                            <RandomPlanet/>
                            <Header onServiceChange={this.onServiceChange}/>
                            <Route path="/people" component={PeoplePage}/>
                            <Route path="/planets" component={PlanetsPage}/>
                            <Route path="/starships" component={StarshipsPage}/>
                        </BrowserRouter>
                    </SwapiServiceProvider>
                </ErrorBoundry>
            </div>
        )
    }
}
