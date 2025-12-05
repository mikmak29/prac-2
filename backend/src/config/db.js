import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGOURL = process.env.MONGO_URL;

const connectDB = async () => {
	try {
		await mongoose.connect(MONGOURL);
		const dbName = mongoose.connection.db.databaseName;
		console.log(`Database successfully connected at ${dbName} `);
	} catch (error) {
		throw new Error({ Error: error.message });
	}
};

export default connectDB;
