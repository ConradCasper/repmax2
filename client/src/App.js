import React, { Component } from 'react';
import User from './components/User'
import Workout from './components/Workout'

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>
                        Rep Max
                    </h1>
                </header>
                <nav>
                    Home
                </nav>
                <h1>User: Conrad</h1>
                <User />
                <h1>Workouts: blah</h1>
                <Workout />

            </div>
        );
    }
}

export default App;