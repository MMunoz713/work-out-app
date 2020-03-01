const router = require("express").Router();
const Workout = require("../models/workoutRoutine.js/index.js.js");

router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/workout/bulk")