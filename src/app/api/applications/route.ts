import { NextResponse } from "next/server";
import jacobApi from "@/utils/jacobApi";

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
    NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
