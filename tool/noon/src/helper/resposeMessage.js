import { NextResponse } from "next/server";

export default function qk(message1, status1, success1) {
  return NextResponse.json(
    {
      message: message1,
      success: success1,
    },
    {
      status: status1,
    }
  );
}
