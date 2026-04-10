import { NextRequest, NextResponse } from "next/server";
import { getConferenceContent, updateConferenceContent } from "@/lib/conference";
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
    const conference = await getConferenceContent();
    return NextResponse.json({ conference });
  } catch {
    return NextResponse.json({ error: "Failed to load conference content." }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  if (!(await isAuthorized(request))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const updated = await updateConferenceContent(body.conference);
    return NextResponse.json({ conference: updated });
  } catch {
    return NextResponse.json({ error: "Could not update conference." }, { status: 500 });
  }
}
