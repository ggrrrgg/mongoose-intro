const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const CatSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: false
    },
    favouritePlacesToSit:{
        type:[String],
        required: false,
        unique: false
    },
    gender: {
        type:String,
        required:false,
        unique:false
    },
    age:{
        type: Number,
        required:true,
        unique:false
    },
    safeToPet: {
        type: Boolean,
        required: false,
        unique:false
    },
    weightKg: {
		type: Number,
		required: false,
		unique: false
	},
	favouriteToys: {
		type: [String],
		required: false,
		unique: false
	},
	photos: {
		type: [String],
		required: false,
		unique: false
    }
});

const Cat = mongoose.model('Cat', CatSchema);

module.exports = {
	Cat
}