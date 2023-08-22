import { NextResponse } from "next/server";
import { connectDB } from "@/helper/db";
import { Task } from "@/models/task";
import jwt from "jsonwebtoken";

connectDB();

export async function DELETE(req, { params }) {
  const { taskId } = params;
  try {
    await Task.deleteOne({ _id: taskId });
    return NextResponse.json(
      { message: "Task deleted successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  const gettoken = req.cookies.get("authToken")?.value;
  const verifytoken = jwt.verify(gettoken, process.env.JWT_SECRET);
  const { title, content, status } = await req.json();
  const { taskId } = params;
  try {
    const task = await Task.findById(taskId);
    (task.title = title),
      (task.content = content),
      (task.userId = verifytoken._id),
      (task.status = status),
      await task.save();

    return NextResponse.json(
      { message: "Task updated successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 500 }
    );
  }
}
