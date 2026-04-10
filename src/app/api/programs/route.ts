import { NextResponse } from "next/server";
import { getPrograms } from "@/lib/programs";

export const runtime = "nodejs";

export async function GET() {
  try {
    const programs = await getPrograms();
    return NextResponse.json({ programs });
  } catch {
    return NextResponse.json({ error: "Failed to load programs." }, { status: 500 });
  }
}
