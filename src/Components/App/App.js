import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const changeCheck = element => {
    
}

class App extends Component {
    state = {
        checked: false
    }
    handleCheck = () => {
        this.setState({checked: !this.state.checked})
    }
    render () {
        const iconChange = this.state.checked ? ["fas", "check-square"] : ["fas", "square"];
        const style = {
            cursor: "pointer"
        };
        return (
            <div className="App">
                <FontAwesomeIcon className="home" icon="coffee" />
                <h1>Hello React Application</h1>
                <FontAwesomeIcon onClick = {this.handleCheck} style = {style} icon={iconChange} />
                Popular gadgets come from vendors like:
                <FontAwesomeIcon icon={['fab', 'apple']} />
                <FontAwesomeIcon icon={['fab', 'microsoft']} />
                <FontAwesomeIcon icon={['fab', 'google']} />
            </div>
        );
    }
}

export default App;