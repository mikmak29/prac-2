import User from "../models/User.js";

export const getData = () => {
	return User.find();
};

export const createData = async (DATA) => {
	try {
		const data = new User(DATA);

		return await data.save();
	} catch (error) {
		throw new Error({ POST: error.message });
	}
};

export const updateData = async (reqId, reqBody, updated) => {
	try {
		const data = await User.findByIdAndUpdate(reqId, reqBody, updated);

		return data;
	} catch (error) {
		throw new Error({ UPDATE: error.message });
	}
};

export const deleteData = async (reqId) => {
	try {
		const data = await User.findByIdAndDelete(reqId);

		return data;
	} catch (error) {
		throw new Error({ DELETE: error.message });
	}
};
