/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/jacobApi.ts

interface JacobApiOptions extends RequestInit {
  query?: Record<string, any>; // allows { page, take, category, ... }
}

const jacobApi = async (endpoint: string, options: JacobApiOptions = {}) => {
  try {
    // Build base URL
    const baseUrl = process.env.NEXT_PUBLIC_JACOB_API_URL || "";
    const url = new URL(`${baseUrl}${endpoint}`);

    // ✅ Add query parameters if provided
    if (options.query) {
      Object.entries(options.query).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "")
          url.searchParams.append(key, String(value));
      });
    }

    // Prepare fetch options
    const fetchOptions: RequestInit = {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_JACOB_API_KEY || "",
        "x-language": "en",
        ...(options.headers || {}),
      },
      cache: "no-store", // disables caching
    };

    // Perform request
    const res = await fetch(url.toString(), fetchOptions);

    if (!res.ok) {
      throw new Error(`Jaicob API Error: ${res.status}`);
    }

    return await res.json();
  } catch (error: any) {
    console.error("❌ Jaicob API Error:", error.message);
    throw error;
  }
};
export default jacobApi;
