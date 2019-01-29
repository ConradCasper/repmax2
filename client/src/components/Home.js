import React, { Component } from 'react';
import User from './User'
import WorkoutsList from './WorkoutsList'
import UserList from './UserList'



class Home extends Component {
    state = {
        users: [{
            user: {
                name: 'Conrad',
                weight: 185,
                age: 27
            },
            workouts: [
                {
                    reps: 10,
                    length: "1hr 15min",
                    movements: [
                        'dead lift',
                        'incline bench press'
                    ],
                    date: '1/25/19',
                    weight: "75lbs"
                }
            ]
        },
        {
            user: {
                name: 'Cameron',
                weight: 160,
                age: 26
            },
            workouts: [
                {
                    reps: 10,
                    length: "1hr 15min",
                    movements: [
                        'dead lift',
                        'incline bench press'
                    ],
                    date: '1/25/19',
                    weight: "75lbs"
                }
            ]
        }]
    }

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
                <h1>User: Cassius</h1>
                
                <UserList userList={this.state.users} />

            </div>
        );
    }
}

export default Home;