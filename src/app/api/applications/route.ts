import jacobApi from "@/utils/jacobApi";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const res = await jacobApi("/applications", {
      method: "POST",
      body: JSON.stringify(data),
    });

    return NextResponse.json(res);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
