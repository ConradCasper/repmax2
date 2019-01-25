import React, { Component } from 'react';

class Workout extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        date: {this.props.workout.date}
                    </li>
                    <li>
                        length: {this.props.workout.length}
                    </li>
                    <li>
                        movements: {this.props.workout.movements}
                    </li>
                    <li>
                        weight: {this.props.workout.weight}
                    </li>
                    <li>
                        reps: {this.props.workout.reps}
                    </li>
                </ul>
            
                
            </div>
        );
    }
}

export default Workout;