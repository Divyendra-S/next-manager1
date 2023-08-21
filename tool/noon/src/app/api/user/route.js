import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";

connectDB();

export async function POST(req) {
  const { name, email, password, about } = await req.json();
  try {
    const newUser = new User({
      name: name,
      email: email,
      password: password,
      about: about,
    });
    newUser.password = bcrypt.hashSync(
      newUser.password,
      parseInt(process.env.BCRYPT_SALT)
    );
    await newUser.save();
    return NextResponse.json(newUser, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: err.message, success: false },
      { status: 500 }
    );
  }
}
export async function GET(req) {
  let userger = [];
  try {
    userger = await User.find().select("-password");
    return NextResponse.json(userger, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
