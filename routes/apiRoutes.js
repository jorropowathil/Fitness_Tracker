const router = require('express').Router();
const path = require('path');
const workout = require("../models/workout.js");

// Api workout route
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration",
            },
         },},])
        .then((workoutsdb) => {
            res.json(workoutsdb);
            console.log(workoutsdb);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Api workout Post route
router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
        .then((workoutsdb) => {
            res.json(workoutsdb);
        })
        .catch((err) => {
            console.log(workoutsdb);
            res.json(err);
        });
});





// router.get("/api/workouts/range", (req, res) => {
// });