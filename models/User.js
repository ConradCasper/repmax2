const mongoose = require('../db/connections')


const Schema = mongoose.Schema

const User = new Schema ({
    name: String,
    age: Number,
    weight: Number,
    workouts: [{
        type: Schema.Types.ObjectId,
        ref: "Workout"
    }]
})

module.exports = mongoose.model("User", User)