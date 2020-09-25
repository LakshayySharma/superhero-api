
const mongoose = require('mongoose');


const superheroSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    powers: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    }
});

module.exports = Superhero = mongoose.model('superhero',superheroSchema);