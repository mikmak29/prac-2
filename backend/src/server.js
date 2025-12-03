import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const serverStarter = () => {
	try {
		app.listen(PORT, () => {
			console.log(`Server running at http://localhost:${PORT}`);
		});
	} catch (error) {
		console.error(`Server error: ${error.message}`);
		process.exit(1);
	}
};

serverStarter();
