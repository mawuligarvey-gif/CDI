import { NextRequest, NextResponse } from "next/server";
import { getPrograms, updatePrograms } from "@/lib/programs";
import { getBlogAuthCookieName, getBlogAuthToken } from "@/lib/blog-auth";

export const runtime = "nodejs";

async function isAuthorized(request: NextRequest): Promise<boolean> {
  const authCookie = request.cookies.get(getBlogAuthCookieName())?.value;
  return Boolean(authCookie) && authCookie === (await getBlogAuthToken());
}

export async function GET(request: NextRequest) {
  if (!(await isAuthorized(request))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const programs = await getPrograms();
    return NextResponse.json({ programs });
  } catch {
    return NextResponse.json({ error: "Failed to load programs." }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  if (!(await isAuthorized(request))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const programs = Array.isArray(body.programs) ? body.programs : [];
    const updated = await updatePrograms(programs);
    return NextResponse.json({ programs: updated });
  } catch {
    return NextResponse.json({ error: "Could not update programs." }, { status: 500 });
  }
}
