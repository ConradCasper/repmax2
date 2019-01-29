import React, { Component } from 'react';
import Workout from './Workout'

class WorkoutsList extends Component {
    render() {
        return (
            <div>
                {this.props.workouts.map((workout, i) => {
                    return (<Workout
                        key={i}
                        workoutDate={workout.date}
                        workoutReps={workout.reps}
                        workoutId={i}
                        

                
                        
                    />)
                })
                }
                <button>Create New Workout</button>
            </div>
        );
    }
}

export default WorkoutsList;