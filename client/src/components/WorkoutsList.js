import React, { Component } from 'react';
import Workout from './Workout'

class WorkoutsList extends Component {
    render() {
        return (
            <div>
                <Workout workouts={this.props.workouts[0]}/>
                <Workout workouts={this.props.workouts[0]} />
                <Workout workouts={this.props.workouts[0]} />
            </div>
        );
    }
}

export default WorkoutsList;