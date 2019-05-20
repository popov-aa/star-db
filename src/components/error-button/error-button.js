import React from 'react'

export default class ErrorButton extends React.Component {

    state = {
        hasError: false
    }

    onButtonClick = () => {
        this.setState({hasError: true})
    }

    render () {
        if (this.state.hasError) {
            throw new Error('what?')
        }
       return (
           <button className="btn btn-primary" onClick={this.onButtonClick}>Emit error</button>
       )
    }
}