import React, { Component } from 'react';
import './App.css';
import Tchat from './components/Tchat/Tchat';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Tchat />
            </div>
        );
    }
}

export default App;
