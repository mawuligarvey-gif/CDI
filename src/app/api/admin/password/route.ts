import { NextRequest, NextResponse } from "next/server";
import {
  getBlogAuthCookieName,
  getBlogAuthToken,
  isUsingDefaultBlogPassword,
  updateBlogPassword,
} from "@/lib/blog-auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const authCookie = request.cookies.get(getBlogAuthCookieName())?.value;
  if (!authCookie || authCookie !== (await getBlogAuthToken())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const currentPassword = String(body.currentPassword || "");
    const newPassword = String(body.newPassword || "");
    const confirmPassword = String(body.confirmPassword || "");

    if (!currentPassword || !newPassword || !confirmPassword) {
      return NextResponse.json(
        { error: "Please fill in all password fields." },
        { status: 400 }
      );
    }

    if (newPassword !== confirmPassword) {
      return NextResponse.json(
        { error: "New password and confirmation do not match." },
        { status: 400 }
      );
    }

    if (currentPassword === newPassword) {
      return NextResponse.json(
        { error: "New password must be different from the current password." },
        { status: 400 }
      );
    }

    const result = await updateBlogPassword(currentPassword, newPassword);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
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
      { error: "Could not update password right now." },
      { status: 500 }
    );
  }
}
