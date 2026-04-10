import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { getBlogAuthCookieName, getBlogAuthToken } from "@/lib/blog-auth";

export const runtime = "nodejs";

function sanitizeFileName(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, "-");
}

export async function POST(request: NextRequest) {
  const authCookie = request.cookies.get(getBlogAuthCookieName())?.value;
  if (!authCookie || authCookie !== (await getBlogAuthToken())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Please upload an image file." }, { status: 400 });
    }

    const uploadsDir = path.join(process.cwd(), "public", "images", "conference");
    await fs.mkdir(uploadsDir, { recursive: true });

    const safeName = sanitizeFileName(file.name || "conference-flyer.png");
    const fileName = `${Date.now()}-${safeName}`;
    const filePath = path.join(uploadsDir, fileName);

    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({ url: `/images/conference/${fileName}` });
  } catch {
    return NextResponse.json({ error: "Could not upload file." }, { status: 500 });
  }
}
