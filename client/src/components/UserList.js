import React, { Component } from 'react';
import User from './User'
import {Link} from 'react-router-dom'

class UserList extends Component {
    
    render() {
        return (
            <div>
                {this.props.userList.map((user) =>(
                    <div>
                        <h1>
                            <Link to={`/user/${user._id}`}>{user.name}</Link>
                        </h1>
                        <p>
                            {user.weight}
                        </p>
                        <p>
                            {user.age}
                        </p>
                    </div>
                ))}
            </div>
        );
    }
}

export default UserList;