import { NextResponse } from "next/server";
import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(req) {
  const gettoken = req.cookies.get("authToken")?.value;
  const verifytoken = jwt.verify(gettoken, process.env.JWT_SECRET);
  try {
    const user = await User.findById(verifytoken._id);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { message: error.message, success: true },
      {
        status: 400,
      }
    );
  }
}
