import { NextResponse } from "next/server";
import { Task } from "@/models/task";
import { connectDB } from "@/helper/db";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(req) {
  const valu = req.cookies.get("authToken")?.value;
  const data = jwt.verify(valu, process.env.JWT_SECRET);

  const { title, content } = await req.json();
  const task = new Task({
    title,
    content,
    userId: data._id,
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
