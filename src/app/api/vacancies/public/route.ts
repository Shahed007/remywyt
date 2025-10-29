/* eslint-disable @typescript-eslint/no-explicit-any */
import jacobApi from "@/utils/jacobApi";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const query: Record<string, any> = {};

    if (searchParams.has("page")) {
      query.page = Number(searchParams.get("page"));
    }
    if (searchParams.has("take")) {
      query.take = Number(searchParams.get("take"));
    }
    if (searchParams.has("clientId")) {
      query.clientId = searchParams.get("clientId");
    }
    if (searchParams.has("query")) {
      query.query = searchParams.get("query");
    }
    if (searchParams.has("city")) {
      query.city = searchParams.get("city");
    }
    if (searchParams.has("onlyRemote")) {
      query.onlyRemote = searchParams.get("onlyRemote") === "true";
    }
    const jobCategory = searchParams.getAll("jobCategory");
    if (jobCategory.length) {
      query.jobCategory = jobCategory;
    }
    const industryIds = searchParams.getAll("industryIds");
    if (industryIds.length) {
      query.industryIds = industryIds;
    }
    // same for seniorityIds, educationLevelIds...

    const result = await jacobApi("/vacancies/public", {
      method: "GET",
      query,
    });

    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
