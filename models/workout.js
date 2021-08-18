const mongoose = require("mongoose");

const schema = mongoose.schema;

const workout = new Schema ({
    // Default date of workout is current date
    date:{
        type: Date,
        default: new Date(new Date().setDate(new Date().getDate())),
    }

})


const workout = mongoose.model("workout", workout);
module.exports = workout;