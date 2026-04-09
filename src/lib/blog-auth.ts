import { createHash } from "crypto";

const DEFAULT_BLOG_ADMIN_PASSWORD = "cdio-admin-2026";
const AUTH_COOKIE_NAME = "cdio_blog_admin";

function getBlogAdminPassword(): string {
  return process.env.BLOG_ADMIN_PASSWORD || DEFAULT_BLOG_ADMIN_PASSWORD;
}

export function isUsingDefaultBlogPassword(): boolean {
  return !process.env.BLOG_ADMIN_PASSWORD;
}

export function getBlogAuthCookieName(): string {
  return AUTH_COOKIE_NAME;
}

export function isValidBlogPassword(password: string): boolean {
  return password === getBlogAdminPassword();
}

export function getBlogAuthToken(): string {
  const secret = getBlogAdminPassword();
  return createHash("sha256")
    .update(`${secret}:cdio-blog-auth-v1`)
    .digest("hex");
}
