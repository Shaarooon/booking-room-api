const mongoose = require("mongoose");

const connect = async () => {
	try {
		const url = process.env.MONGO_URI.replace("<password>", process.env.MONGO_PASSWORD);

		await mongoose.connect(url);
	} catch (error) {
		throw new Error(error.message);
	}
};

module.exports = connect;
