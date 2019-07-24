import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <div className = "App">
        <FontAwesomeIcon icon = { faHome } />
        <h1>Hello React Application</h1>
    </div>
);

export default App;