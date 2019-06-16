import React from 'react'
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator";

export default class PeoplePage extends React.Component {

    state = {
        selectedPerson: null,
        hasError: false
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        })
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render () {
        const {selectedPerson, hasError} = this.state
        if (hasError) {
            return <ErrorIndicator/>
        } else {
            return (
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onPersonSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={selectedPerson}/>
                    </div>
                    <ErrorButton/>
                </div>
            )
        }
    }
}