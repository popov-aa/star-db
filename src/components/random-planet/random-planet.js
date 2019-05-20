import React from 'react';
import './random-planet.css'

import SwapiService from '../../services/swapi-service'

export default class RandomPlanet extends React.Component {

    swapiService = new SwapiService()

    state = {
        planet: {}
    }

    constructor () {
        super()
        this.updatePlanet()
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet})
    }

    updatePlanet () {
        const id = Math.floor(Math.random()*25 + 2);
        this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch((error) => {
            console.log(error)
        })
    }

    render () {
        const {
            planet: {
                id,
                name,
                population,
                rotationPeriod,
                diameter
            }
        } = this.state
        if (id === null) {
            return null
        } else {
            return (
                <div className="random-planet jumbotron rounded">
                    <img width="256" height="256" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            )
        }
    }
}
