export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    _extractId(url) {
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

    async getResouce (url) {
        const response = await fetch(`${this._apiBase}${url}`);
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}: ${response.status}.`)
        }
        const body = await response.json();
        return body;
    };

    async getAllPeople() {
        const body = await this.getResouce(`/people`);
        return body.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const resource = await this.getResouce(`/people/${id}`);
        return this._transformPerson(resource);
    }

    async getAllStarships() {
        const body = await this.getResouce(`/starships`);
        return body.results.map(this._transformStarship);
    }

    async getStarship(id) {
        const resource = await this.getResouce(`/starships/${id}`);
        return this._transformStarship(resource);
    }

    async getAllPlanets() {
        const body = await this.getResouce(`/planets`);
        return body.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const resource = await this.getResouce(`/planets/${id}`);
        return this._transformPlanet(resource);
    }

}