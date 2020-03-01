const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a workout name"
    },
    sets: {
        type: Number,
        required: "How many sets?"
    },
    reps: {
        type: Number,
        required: "How many reps?"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;