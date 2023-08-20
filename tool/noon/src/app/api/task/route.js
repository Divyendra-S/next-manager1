import { NextResponse } from "next/server";
import { Task } from "@/models/task";
import { connectDB } from "@/helper/db";

connectDB();

export async function POST(req) {
  const { title, content, userId } = await req.json();
  const task = new Task({
    title,
    content,
    userId,
  });
  try {
    await task.save();
    return NextResponse.json(
      { message: "Task created successfully!", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 400 }
    );
  }
}
