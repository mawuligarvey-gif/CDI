import { NextResponse } from "next/server";
import { getConferenceContent } from "@/lib/conference";

export const runtime = "nodejs";

export async function GET() {
  try {
    const conference = await getConferenceContent();
    return NextResponse.json({ conference });
  } catch {
    return NextResponse.json({ error: "Failed to load conference content." }, { status: 500 });
  }
}
