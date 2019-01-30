import React, { Component } from 'react';
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import User from "./components/User"

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/user/:userId" component={User} />
                    </Switch>
                </Router>
            </div>



        );
    }
}

export default App;