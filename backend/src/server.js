import dotenv from "dotenv";
import app from "./app.js";
import database from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const serverStarter = async () => {
	try {
		await database();

		app.listen(PORT, () => {
			console.log(`Server running at http://localhost:${PORT}`);
		});
	} catch (error) {
		console.error(`Server error: ${error.message}`);
		process.exit(1);
	}
};

serverStarter();
