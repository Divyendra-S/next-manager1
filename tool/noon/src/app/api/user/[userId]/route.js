import { NextResponse } from "next/server";
import { connectDB } from "@/helper/db";
import { User } from "@/models/user";

connectDB();
export async function GET(req, { params }) {
  const { userId } = params;
  try {
    const user = await User.findOne({ _id: userId });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { userId } = params;
  try {
    await User.deleteOne({ _id: userId });
    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
