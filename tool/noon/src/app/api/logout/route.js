import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const response = NextResponse.json({ message: "logged Out successfully" });
    response.cookies.set("authToken", "", {
      expires: new Date(0),
    });
    return response;
  } catch (error) {
    return NextResponse.json({ message: "failed to logout" });
  }
}
