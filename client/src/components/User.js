import React, { Component } from 'react';

class User extends Component {

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
                    name: {this.props.user.name}
                </h3>
                <p>
                    weight: {this.props.user.weight}
                </p>
                <p>
                    age: {this.props.user.age}
                </p>
                <button onClick={this.editUser}>Edit</button>
                <button onClick={this.deleteUser}>Delete</button>
            </div>
        );
    }
}

export default User;