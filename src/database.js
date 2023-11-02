const mongoose = require('mongoose');

async function databaseConnect(){
	try {
		// DB connection can take some time, eg. if DB is in the cloud 
		console.log("Connecting to:\n" + process.env.DB_URI);
		await mongoose.connect('mongodb+srv://CatAdmin:CatAdmin123@catadmin.m4gompp.mongodb.net/?retryWrites=true&w=majority');
		console.log("Database connected");
	} catch (error) {
		console.warn(`databaseConnect failed to connect to DB:\n${JSON.stringify(error)}`);
	}
}

module.exports = {
    databaseConnect
}