import { NextRequest, NextResponse } from "next/server";
import { addBlogPost, getBlogPosts } from "@/lib/blog";
import { getBlogAuthCookieName, getBlogAuthToken } from "@/lib/blog-auth";

export const runtime = "nodejs";

export async function GET() {
  try {
    const posts = await getBlogPosts();
    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json(
      { error: "Failed to load blog posts." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const authCookie = request.cookies.get(getBlogAuthCookieName())?.value;
  if (!authCookie || authCookie !== (await getBlogAuthToken())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const title = String(body.title || "").trim();
    const excerpt = String(body.excerpt || "").trim();
    const author = String(body.author || "").trim();
    const category = String(body.category || "").trim();
    const content = String(body.content || "").trim();
    const image = String(body.image || "").trim();

    if (!title || !excerpt || !author || !category || !content) {
      return NextResponse.json(
        { error: "Please fill in title, excerpt, author, category, and content." },
        { status: 400 }
      );
    }

    const post = await addBlogPost({
      title,
      excerpt,
      author,
      category,
      image,
      content,
    });

    return NextResponse.json({ post }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Could not publish blog post." },
      { status: 500 }
    );
  }
}
