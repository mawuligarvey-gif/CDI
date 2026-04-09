import { NextRequest, NextResponse } from "next/server";
import {
  getBlogAuthCookieName,
  getBlogAuthToken,
  isUsingDefaultBlogPassword,
  isValidBlogPassword,
} from "@/lib/blog-auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const password = String(body.password || "");

    if (!(await isValidBlogPassword(password))) {
      return NextResponse.json(
        { error: "Incorrect password." },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      usingDefaultPassword: await isUsingDefaultBlogPassword(),
    });

    response.cookies.set({
      name: getBlogAuthCookieName(),
      value: await getBlogAuthToken(),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Could not complete login." },
      { status: 500 }
    );
  }
}
