import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const request_id = searchParams.get("request_id");

    if (!request_id) {
      return NextResponse.json(
        { message: "Missing request_id in query params" },
        { status: 400 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as Blob;

    if (!file) {
      return NextResponse.json(
        { message: "Missing file in form data" },
        { status: 400 }
      );
    }

    // Prepare FormData for Jacob API
    const jacobForm = new FormData();
    jacobForm.append("file", file);

    // Send file to Jacob API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_JACOB_API_URL}/file/resume?request_id=${request_id}`,
      {
        method: "POST",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_JACOB_API_KEY || "",
          "x-language": "en",
        },
        body: jacobForm,
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Upload Error:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
