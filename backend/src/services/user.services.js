import User from "../models/User.js";

export const getData = () => {
	return User.find();
};

export const isUserExist = async (userData) => {
	try {
		const checkUser = await User.findOne({ name: userData.name });

		return checkUser;
	} catch (error) {
		throw new Error(`Error checking user existence: ${error.message}`);
	}
};

export const createData = async (DATA) => {
	const data = new User(DATA);

	return await data.save();
};

export const updateData = async (reqId, reqBody, updated) => {
	const data = await User.findByIdAndUpdate(reqId, reqBody, updated);

	return data;
};

export const deleteData = async (reqId) => {
	const data = await User.findByIdAndDelete(reqId);

	return data;
};
