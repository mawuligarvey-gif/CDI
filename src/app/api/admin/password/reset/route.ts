import { NextRequest, NextResponse } from "next/server";
import {
  getBlogAuthCookieName,
  getBlogAuthToken,
  isUsingDefaultBlogPassword,
  resetBlogPasswordWithRecoveryKey,
} from "@/lib/blog-auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const recoveryKey = String(body.recoveryKey || "");
    const newPassword = String(body.newPassword || "");
    const confirmPassword = String(body.confirmPassword || "");

    if (!recoveryKey || !newPassword || !confirmPassword) {
      return NextResponse.json(
        { error: "Please fill in all reset fields." },
        { status: 400 }
      );
    }

    if (newPassword !== confirmPassword) {
      return NextResponse.json(
        { error: "New password and confirmation do not match." },
        { status: 400 }
      );
    }

    const result = await resetBlogPasswordWithRecoveryKey(recoveryKey, newPassword);
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
      { error: "Could not reset password right now." },
      { status: 500 }
    );
  }
}
