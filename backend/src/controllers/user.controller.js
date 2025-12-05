import * as userService from "../services/user.services.js";

export const getData = async (req, res) => {
	try {
		const data = await userService.getData();

		if (!data) {
			throw new Error("Couldn't fetch the data.");
		}

		res.status(200).send(data);
	} catch (error) {
		res.status(400).json({ DATA: error.message });
	}
};

export const createData = async (req, res) => {
	try {
		const data = req.body;

		const createData = await userService.createData(data);

		res.status(200).send(createData);
	} catch (error) {
		res.status(400).json({ DATA: error.message });
	}
};
