export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

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
        return body.results;
    }

    getPerson(id) {
        return this.getResouce(`/people/${id}`);
    }

    async getAllStarships() {
        const body = await this.getResouce(`/starships`);
        return body.results;
    }

    getStarship(id) {
        return this.getResouce(`/starships/${id}`);
    }

    async getAllPlanets() {
        const body = await this.getResouce(`/planets`);
        return body.results;
    }

    async getPlanet(id) {
        return await this.getResouce(`/planets/${id}`);
    }

}