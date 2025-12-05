import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			require: [true, "Name required."],
		},
		age: {
			type: Number,
			require: [true, "Age required."],
		},
	},
	{
		versionKey: false,
	}
);

export default mongoose.model("User", userSchema, "prac2_users");
