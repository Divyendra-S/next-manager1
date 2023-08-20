import { NextResponse } from "next/server";
import { connectDB } from "@/helper/db";
import { Task } from "@/models/task";

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
  const { title, content, userId } = await req.json();
  const { taskId } = params;
  try {
    const task = await Task.findById(taskId);
    (task.title = title),
      (task.content = content),
      (task.userId = userId),
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
