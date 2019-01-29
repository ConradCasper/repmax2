import React, { Component } from 'react';
import User from './User'

class UserList extends Component {
    
    render() {
        return (
            <div>
                {this.props.userList.map((user) =>(
                    <div>
                        <h1>
                            {user.user.name}
                        </h1>
                        <p>
                            {user.user.weight}
                        </p>
                        <p>
                            {user.user.age}
                        </p>
                    </div>
                ))}
            </div>
        );
    }
}

export default UserList;