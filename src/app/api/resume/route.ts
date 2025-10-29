/* eslint-disable @typescript-eslint/no-explicit-any */
import jacobApi from "@/utils/jacobApi";
import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<NextResponse> {
  try {
    // ✅ Parse query params safely
    const { searchParams } = new URL(request.url);

    const query: Record<string, any> = {};

    const page = searchParams.get("page");
    if (page) query.page = Number(page);

    const take = searchParams.get("take");
    if (take) query.take = Number(take);

    const clientId = searchParams.get("clientId");
    if (clientId) query.clientId = clientId;

    const searchQuery = searchParams.get("query");
    if (searchQuery) query.query = searchQuery;

    const city = searchParams.get("city");
    if (city) query.city = city;

    const onlyRemote = searchParams.get("onlyRemote");
    if (onlyRemote !== null) query.onlyRemote = onlyRemote === "true";

    // ✅ Parse array query params
    const jobCategory = searchParams.getAll("jobCategory");
    if (jobCategory.length) query.jobCategory = jobCategory;

    const industryIds = searchParams.getAll("industryIds");
    if (industryIds.length) query.industryIds = industryIds;

    const seniorityIds = searchParams.getAll("seniorityIds");
    if (seniorityIds.length) query.seniorityIds = seniorityIds;

    const educationLevelIds = searchParams.getAll("educationLevelIds");
    if (educationLevelIds.length) query.educationLevelIds = educationLevelIds;

    // ✅ Call the Jacob API
    const result = await jacobApi("/vacancies/public", {
      method: "GET",
      query,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("GET /vacancies/public error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
