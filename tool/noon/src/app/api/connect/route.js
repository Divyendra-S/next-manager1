import { NextResponse } from "next/server";
import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    // Ensure DB is connected for each request
    connectDB();

    // Get and verify the token
    const gettoken = req.cookies.get("authToken")?.value;
    const verifytoken = jwt.verify(gettoken, process.env.JWT_SECRET);

    // Find user and return
    const user = await User.findById(verifytoken._id);
    return NextResponse.json(user);
  } catch (error) {
    // Handle any error that might occur
    return NextResponse.json(
      { message: error.message, success: false },
      {
        status: 400,
      }
    );
  }
}
// import { NextResponse } from "next/server";
// import { connectDB } from "@/helper/db";
// import { User } from "@/models/user";
// import jwt from "jsonwebtoken";

// connectDB();

// export async function GET(req) {
//   const gettoken = req.cookies.get("authToken")?.value;
//   const verifytoken = jwt.verify(gettoken, process.env.JWT_SECRET);
//   try {
//     const user = await User.findById(verifytoken._id);
//     return NextResponse.json(user);
//   } catch (error) {
//     return NextResponse.json(
//       { message: error.message, success: false },
//       {
//         status: 400,
//       }
//     );
//   }
// }
