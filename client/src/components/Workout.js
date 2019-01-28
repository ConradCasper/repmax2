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
                        date: {this.props.workouts.date}
                    </li>
                    <li>
                        length: {this.props.workouts.length}
                    </li>
                    <li>
                        movements: {this.props.workouts.movements}
                    </li>
                    <li>
                        weight: {this.props.workouts.weight}
                    </li>
                    <li>
                        reps: {this.props.workouts.reps}
                    </li>
                </ul>
                <button onClick={this.deleteWorkout}>Delete</button>
                <button onClick={this.editWorkout}>Edit</button>
            
                
            </div>
        );
    }
}

export default Workout;
