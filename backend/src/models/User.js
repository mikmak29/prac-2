import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name required."],
			unique: true,
		},
		age: {
			type: Number,
			required: [true, "Age required."],
			undefined: true,
		},
		location: {
			region: {
				type: String,
				required: [true, "Region required."],
			},
			city: {
				type: String,
				required: [true, "City required."],
			},
			postalCode: {
				type: Number,
				required: [true, "postal code required."],
			},
		},
	},
	{
		versionKey: false,
	}
);

export default mongoose.model("User", userSchema, "prac2_users");
