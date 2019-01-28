import React, { Component } from 'react';

class User extends Component {
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
                <button>Edit</button>
                <button>Delete</button>
            </div>
        );
    }
}

export default User;