const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SightingSchema = new Schema({
    location: {
        type: String,
        required: true,
        unique: false
    },
    time: {
        type: Date,
        required: false,
        unique: false,
        default: new Date(Date.now())
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    cats: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Cat'
        }
    ]
});

const Sighting = mongoose.model('Sighting', SightingSchema);

module.exports = {
    Sighting
}