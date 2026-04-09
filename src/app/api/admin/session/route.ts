import { NextRequest, NextResponse } from "next/server";
import {
  getBlogAuthCookieName,
  getBlogAuthToken,
  isUsingDefaultBlogPassword,
} from "@/lib/blog-auth";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const cookie = request.cookies.get(getBlogAuthCookieName())?.value;
  const authenticated = cookie === getBlogAuthToken();

  return NextResponse.json({
    authenticated,
    usingDefaultPassword: isUsingDefaultBlogPassword(),
  });
}
