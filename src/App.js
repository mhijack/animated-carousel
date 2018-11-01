import React from 'react';

import CardContainer from './components/CardContainer/CardContainer';
import Instruction from './components/Instruction/Instruction';

import './App.css';

const App = props => {
    return (
        <div className="App">
            <CardContainer />
            <Instruction />
        </div>
    );
};

export default App;
