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
		location: {
			region: {
				type: String,
				require: [true, "Region required."],
			},
			city: {
				type: String,
				require: [true, "City required."],
			},
			postalCode: {
				type: Number,
				require: [true, "postal code required."],
			},
		},
	},
	{
		versionKey: false,
	}
);

export default mongoose.model("User", userSchema, "prac2_users");
