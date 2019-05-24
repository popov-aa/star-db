import React from 'react';
import './random-planet.css'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-service'

export default class RandomPlanet extends React.Component {

    swapiService = new SwapiService()

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, 1500)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random()*25) + 3;
        this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
    }

    render () {
        console.log('render')
        const {
            planet,
            loading,
            error
        } = this.state

        const content = error ? <ErrorIndicator/> :
            loading ? <Spinner/> :
                <PlanetContent planet={planet}/>
        return (
            <div className="random-planet jumbotron rounded">
                {content}
            </div>
        )
    }
}

const PlanetContent = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}
