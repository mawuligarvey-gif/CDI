import { createHash, randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { promises as fs } from "fs";
import path from "path";

const DEFAULT_BLOG_ADMIN_PASSWORD = "cdio-admin-2026";
const AUTH_COOKIE_NAME = "cdio_blog_admin";
const AUTH_FILE_PATH = path.join(process.cwd(), "src", "data", "admin-auth.json");

type StoredAuth = {
  passwordHash: string;
  salt: string;
  updatedAt: string;
};

type PasswordState = {
  usingDefaultPassword: boolean;
  passwordHash: string;
};

function hashPassword(password: string, salt: string): string {
  return scryptSync(password, salt, 64).toString("hex");
}

function buildDefaultPasswordState(): PasswordState {
  const password = process.env.BLOG_ADMIN_PASSWORD || DEFAULT_BLOG_ADMIN_PASSWORD;
  return {
    usingDefaultPassword: !process.env.BLOG_ADMIN_PASSWORD,
    passwordHash: createHash("sha256").update(password).digest("hex"),
  };
}

async function readStoredAuth(): Promise<StoredAuth | null> {
  try {
    const raw = await fs.readFile(AUTH_FILE_PATH, "utf8");
    const parsed = JSON.parse(raw) as Partial<StoredAuth>;

    if (!parsed.passwordHash || !parsed.salt) {
      return null;
    }

    return {
      passwordHash: String(parsed.passwordHash),
      salt: String(parsed.salt),
      updatedAt: String(parsed.updatedAt || new Date().toISOString()),
    };
  } catch {
    return null;
  }
}

async function writeStoredAuth(password: string): Promise<void> {
  const dir = path.dirname(AUTH_FILE_PATH);
  await fs.mkdir(dir, { recursive: true });

  const salt = randomBytes(16).toString("hex");
  const payload: StoredAuth = {
    salt,
    passwordHash: hashPassword(password, salt),
    updatedAt: new Date().toISOString(),
  };

  await fs.writeFile(AUTH_FILE_PATH, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
}

async function getPasswordState(): Promise<PasswordState> {
  const stored = await readStoredAuth();
  if (stored) {
    return {
      usingDefaultPassword: false,
      passwordHash: stored.passwordHash,
    };
  }

  return buildDefaultPasswordState();
}

export function getBlogAuthCookieName(): string {
  return AUTH_COOKIE_NAME;
}

export async function isUsingDefaultBlogPassword(): Promise<boolean> {
  const state = await getPasswordState();
  return state.usingDefaultPassword;
}

export async function isValidBlogPassword(password: string): Promise<boolean> {
  const stored = await readStoredAuth();
  if (stored) {
    const attemptedHash = hashPassword(password, stored.salt);
    const attemptedBuffer = Buffer.from(attemptedHash, "hex");
    const storedBuffer = Buffer.from(stored.passwordHash, "hex");

    if (attemptedBuffer.length !== storedBuffer.length) {
      return false;
    }

    return timingSafeEqual(attemptedBuffer, storedBuffer);
  }

  const fallback = process.env.BLOG_ADMIN_PASSWORD || DEFAULT_BLOG_ADMIN_PASSWORD;
  return password === fallback;
}

export async function updateBlogPassword(
  currentPassword: string,
  nextPassword: string
): Promise<{ success: true } | { success: false; error: string }> {
  const currentIsValid = await isValidBlogPassword(currentPassword);
  if (!currentIsValid) {
    return { success: false, error: "Current password is incorrect." };
  }

  if (nextPassword.length < 10) {
    return { success: false, error: "New password must be at least 10 characters." };
  }

  await writeStoredAuth(nextPassword);
  return { success: true };
}

export async function getBlogAuthToken(): Promise<string> {
  const state = await getPasswordState();
  return createHash("sha256")
    .update(`${state.passwordHash}:cdio-blog-auth-v1`)
    .digest("hex");
}
