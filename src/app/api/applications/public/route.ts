import jacobApi from "@/utils/jacobApi";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // You can read query params like this:
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;
  const take = searchParams.get("take") || 10;

  try {
    const res = await jacobApi("/applications/public", {
      query: { page, take },
    });
    return NextResponse.json(res);

    // credentials: "include", // ✅ includes HttpOnly cookies like refresh token
  } catch (err) {
    console.error(err);
    NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
