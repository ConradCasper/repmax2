import React, { Component } from 'react';
import User from './User'
import WorkoutsList from './WorkoutsList'
import UserList from './UserList'
import axios from 'axios'



class Home extends Component {
    state = {
        users: [{}]
    }

    componentDidMount(){
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('/api/users').then((res) => {
            this.setState({users: res.data})
        })
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
                
                
                <UserList userList={this.state.users} />

            </div>
        );
    }
}

export default Home;