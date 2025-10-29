import jacobApi from "@/utils/jacobApi";
import { NextResponse } from "next/server";

type RouteParams = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const res = await jacobApi(`/applications/public/${params.id}`);
    return NextResponse.json(res);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
