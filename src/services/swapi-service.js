export default class SwapiService {

    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    _extractId = (url) => {
        const idRegExp = /\/(\d+)\/$/
        return url.match(idRegExp)[1]
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship.url),
            name: starship.name,
            model: starship.model,
            manufacter: starship.manufacter,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passangers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    getResouce = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`);
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}: ${response.status}.`)
        }
        const body = await response.json();
        return body;
    };

    getAllPeople = async () => {
        const body = await this.getResouce(`/people`);
        return body.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const resource = await this.getResouce(`/people/${id}`);
        return this._transformPerson(resource);
    }

    getAllStarships = async () => {
        const body = await this.getResouce(`/starships`);
        return body.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const resource = await this.getResouce(`/starships/${id}`);
        return this._transformStarship(resource);
    }

    getAllPlanets = async () => {
        const body = await this.getResouce(`/planets`);
        return body.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const resource = await this.getResouce(`/planets/${id}`);
        return this._transformPlanet(resource);
    }

    getPersonImage = ({id}) => {
        return `${this._imageBase}/characters/${id}.jpg`
    }

    getStarshipImage = ({id}) => {
        return `${this._imageBase}/starships/${id}.jpg`
    }

    getPlanetImage = ({id}) => {
        return `${this._imageBase}/planets/${id}.jpg`
    }
}