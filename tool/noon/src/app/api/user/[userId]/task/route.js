import { NextResponse } from "next/server";
import { Task } from "@/models/task";
import { connectDB } from "@/helper/db";

connectDB();

export async function GET(req, { params }) {
  const { userId } = params;
  let tasks = [];
  try {
    tasks = await Task.find({ userId: userId });
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse({ status: 500, message: error.message });
  }
}
