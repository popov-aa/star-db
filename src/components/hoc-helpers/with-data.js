import React from 'react';
import Spinner from "../spinner";

const withData = (View, getData) => {
    return class extends React.Component {
        state = {
            data: null
        }
    
        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({data})
                });
        }
    
        render () {
            const {data} = this.state
            if (data) {
                return <View {...this.props} data={data} />
            } else {
                return <Spinner/>
            }
        }
    }
}

export default withData;