import React, { Component } from 'react';
import axios from 'axios'

class User extends Component {

    state = {
        user: {}
    }

    componentDidMount () {
        this.getSingleUser()
    }

    getSingleUser = () => {
        axios.get(`/api/users/${this.props.match.params.userId}`).then((res) => {
                this.setState({user: res.data})
    })
    }

    editUser = () => {
        console.log('editUser')
    }

    deleteUser = () => {
        console.log('deleteUser')
    }


    render() {
        return (
            <div>
                <h3>
                    name: {this.state.user.name}
                </h3>
                <p>
                    weight: {this.state.user.weight}
                </p>
                <p>
                    age: {this.state.user.age}
                </p>
                <button onClick={this.editUser}>Edit</button>
                <button onClick={this.deleteUser}>Delete</button>
            </div>
        );
    }
}

export default User;