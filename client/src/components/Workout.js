import React, { Component } from 'react';

class Workout extends Component {

    editWorkout = () => {
        console.log("editWorkout")
    }

    deleteWorkout = () => {
        console.log("deleteWorkout")
    }

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
                <button onClick={this.deleteWorkout}>Delete</button>
                <button onClick={this.editWorkout}>Edit</button>
            
                
            </div>
        );
    }
}

export default Workout;