import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: "string",
  email: {
    type: "string",
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: "string",
    required: [true, "password is required"],
  },
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
