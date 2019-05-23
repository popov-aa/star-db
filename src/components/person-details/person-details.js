import React from 'react';
import './person-details.css'
import SwapiService from "../../services/swapi-service";

export default class PersonDetails extends React.Component {

    swapiService = new SwapiService()

    state = {
        person: null
    }

    updatePerson () {
        const {personId} = this.props
        console.log(personId)
        if (personId) {
            this.swapiService.getPerson(personId).then(person => {this.setState({person})})
        }
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson()
        }
    }

    render () {
        const {person} = this.state

        if (person) {
            return <b>{person.name}</b>
        } else {
            return <span>Select person.</span>
        }

    }

}
