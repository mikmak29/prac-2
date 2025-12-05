import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			require: [true, "Name required."],
			unique: true,
		},
		age: {
			type: Number,
			require: [true, "Age required."],
			undefined: true,
		},
	},
	{
		versionKey: false,
	}
);

export default mongoose.model("User", userSchema, "prac2_users");
