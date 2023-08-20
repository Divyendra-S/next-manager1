import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: "string",
    required: true,
  },
  content: {
    type: "string",
    required: true,
  },
  taskCompletiondate: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: "string",
    enum: ["pending", "completed"],
    default: "pending",
  },
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
});

export const Task =
  mongoose.models.tasks || mongoose.model("tasks", taskSchema);