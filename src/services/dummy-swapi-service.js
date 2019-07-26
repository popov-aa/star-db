export default class DummySwapiService {

    persons = []
    planets = []
    starships = []

    _imageBase = 'https://loremflickr.com/320/240';

    constructor () {
        this.insertPerson('Popov Aleksey', 'male', '01.10.1986', 'blue')
        this.insertPerson('Tatyana Aleksey', 'female', '22.12.1985', 'blue')

        this.insertPlanet('Earth', 7000000000, 365, 30000000)

        this.insertStarship('Falcon', 'B-45', 'USA', 656555, 103, 3, 10, 4)
    }

    insertPerson = (name, gender, birthYear, eyeColor) => {
        this.persons.push({id: this.persons.length, name, gender, birthYear, eyeColor})
    }

    insertPlanet = (name, population, rotationPeriod, diameter) => {
        this.planets.push({id: this.planets.length, name, population, rotationPeriod, diameter})
    }

    insertStarship = (name, model, manufacter, costInCredits, length, crew, passengers, cargoCapacity) => {
        this.starships.push({id: this.starships.length, name, model, manufacter, costInCredits, length, crew, passengers, cargoCapacity})
    }

    getAllPeople = async () => {
        return this.persons
    }

    getPerson = async (id) => {
        return this.persons.find((person) => person.id == id)
    }

    getAllStarships = async () => {
        return this.starships
    }

    getStarship = async (id) => {
        return this.starships.find((starship) => starship.id == id)
    }

    getAllPlanets = async () => {
        return this.planets
    }

    getPlanet = async (id) => {
        return this.planets.find((planet) => planet.id == id)

    }

    getPersonImage = ({id}) => {
        return this._imageBase
    }

    getStarshipImage = ({id}) => {
        return this._imageBase
    }

    getPlanetImage = ({id}) => {
        return this._imageBase
    }
}