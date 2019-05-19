import React from 'react';
import './random-planet.css'

import SwapiService from '../../services/swapi-service'

export default class RandomPlanet extends React.Component {

    swapiService = new SwapiService()

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    }

    constructor () {
        super()
        this.updatePlanet()
    }

    updatePlanet () {
        const id = Math.floor(Math.random()*25 + 2);
        this.swapiService.getPlanet(id)
        .then((planet) => {
            this.setState({
                id: id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render ()
    {
        const {
            id,
            name,
            population,
            rotationPeriod,
            diameter
        } = this.state
        if (id === null) {
            return null
        } else {
            return (
                <div className="random-planet jumbotron rounded">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
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
