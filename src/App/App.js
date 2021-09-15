import React, { Component } from 'react';
import './App.css';
import Tchat from './components/Tchat/Tchat';
import Auth from './pages/Auth/Auth';
import { store } from './store/store'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/" exact>
                            Hello et bienvenue a tous sur le tchat
                            <Link to="Auth">Connectez vous maintenant</Link>
                        </Route>
                        <Route path="/Auth">
                            <Auth />
                        </Route>
                        <Route path="/Tchat/:id">
                            <Tchat />
                        </Route>
                        {/* <Route path="/Tchat" Component={<Auth/>}>
                        </Route> */}
                        <Route path="/">
                            Error 404
                        </Route>
                    </Switch>
                    {/* <Tchat /> */}
                    {/* <Auth /> */}
                </div>
            </Router>
        );
    }
}

export default App;
