import { promises as fs } from "fs";
import path from "path";

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  content: string;
  createdAt: string;
};

type NewPostInput = {
  title: string;
  excerpt: string;
  author: string;
  category: string;
  image?: string;
  content: string;
};

const BLOG_FILE_PATH = path.join(process.cwd(), "src", "data", "blog-posts.json");

async function ensureDataFile(): Promise<void> {
  const dir = path.dirname(BLOG_FILE_PATH);
  await fs.mkdir(dir, { recursive: true });

  try {
    await fs.access(BLOG_FILE_PATH);
  } catch {
    await fs.writeFile(BLOG_FILE_PATH, "[]\n", "utf8");
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  await ensureDataFile();
  const raw = await fs.readFile(BLOG_FILE_PATH, "utf8");

  try {
    const parsed = JSON.parse(raw) as BlogPost[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function formatDisplayDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function addBlogPost(input: NewPostInput): Promise<BlogPost> {
  const posts = await getBlogPosts();
  const now = new Date();
  const baseSlug = slugify(input.title) || `post-${Date.now()}`;

  let slug = baseSlug;
  let suffix = 2;
  while (posts.some((p) => p.slug === slug)) {
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }

  const nextId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;

  const post: BlogPost = {
    id: nextId,
    slug,
    title: input.title.trim(),
    excerpt: input.excerpt.trim(),
    author: input.author.trim(),
    category: input.category.trim(),
    image: input.image?.trim() || "📰",
    content: input.content.trim(),
    date: formatDisplayDate(now),
    createdAt: now.toISOString(),
  };

  const updated = [post, ...posts];
  await fs.writeFile(BLOG_FILE_PATH, `${JSON.stringify(updated, null, 2)}\n`, "utf8");

  return post;
}
