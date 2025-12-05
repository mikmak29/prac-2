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
		res.status(400).json({ CREATE: error.message });
	}
};

export const updateData = async (req, res) => {
	try {
		const updateData = await userService.updateData(req.params.id, req.body, { new: true });

		if (!updateData) {
			throw new Error("User not exist.");
		}

		res.status(200).send(updateData);
	} catch (error) {
		res.status(400).json({ UPDATE: error.message });
	}
};

export const deleteData = async (req, res) => {
	try {
		const data = req.params.id;

		const deleteData = await userService.deleteData(data);

		if (!deleteData) {
			throw new Error("User not exist.");
		}

		console.log("Removed user successfully.");

		res.status(200).send();
	} catch (error) {
		res.status(400).json({ DELETE: error.message });
	}
};
