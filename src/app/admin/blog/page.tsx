"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";

type BlogPost = {
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

type SessionResponse = {
  authenticated: boolean;
  usingDefaultPassword: boolean;
};

const initialForm = {
  title: "",
  excerpt: "",
  author: "",
  category: "",
  image: "📰",
  content: "",
};

export default function BlogAdminPage() {
  const [password, setPassword] = useState("");
  const [loadingSession, setLoadingSession] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [usingDefaultPassword, setUsingDefaultPassword] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState(initialForm);
  const [publishing, setPublishing] = useState(false);
  const [success, setSuccess] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadSession = async () => {
      try {
        const response = await fetch("/api/admin/session", { cache: "no-store" });
        const data = (await response.json()) as SessionResponse;

        setAuthenticated(Boolean(data.authenticated));
        setUsingDefaultPassword(Boolean(data.usingDefaultPassword));
      } catch {
        setError("Could not load admin session.");
      } finally {
        setLoadingSession(false);
      }
    };

    void loadSession();
  }, []);

  useEffect(() => {
    if (!authenticated) return;

    const loadPosts = async () => {
      try {
        const response = await fetch("/api/blog", { cache: "no-store" });
        const data = await response.json();
        setPosts(Array.isArray(data.posts) ? data.posts : []);
      } catch {
        setError("Could not load blog posts.");
      }
    };

    void loadPosts();
  }, [authenticated]);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Login failed.");
        return;
      }

      setAuthenticated(true);
      setPassword("");
      setUsingDefaultPassword(Boolean(data.usingDefaultPassword));
    } catch {
      setError("Could not login right now.");
    }
  };

  const handlePublish = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setPublishing(true);

    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Could not publish post.");
        return;
      }

      setPosts((current) => [data.post as BlogPost, ...current]);
      setForm(initialForm);
      setSuccess("Post published successfully.");
    } catch {
      setError("Could not publish post.");
    } finally {
      setPublishing(false);
    }
  };

  if (loadingSession) {
    return (
      <div className="min-h-screen pt-24 bg-white flex items-center justify-center text-deep-blue">
        Loading admin portal...
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-3">
            Blog Admin Portal
          </h1>
          <p className="text-gray-600">
            This page lets your client add blog posts without touching code.
          </p>
        </motion.div>

        {!authenticated ? (
          <div className="max-w-md mx-auto bg-white border border-gold/30 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-deep-blue mb-4">Sign In</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-deep-blue mb-1">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold/60"
                  placeholder="Enter password"
                  required
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-gold text-deep-blue font-bold hover:opacity-90 transition-opacity"
              >
                Login
              </button>
            </form>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-white border border-gold/30 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-deep-blue mb-1">Create New Post</h2>
              <p className="text-sm text-gray-600 mb-6">
                Fill in the fields and click publish. The post appears on your public blog page immediately.
              </p>

              {usingDefaultPassword && (
                <div className="mb-4 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
                  Security note: You are using the default admin password. Set BLOG_ADMIN_PASSWORD in .env.local.
                </div>
              )}

              <form onSubmit={handlePublish} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-deep-blue mb-1">Post Title</label>
                  <input
                    value={form.title}
                    onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="Example: Leadership in 2026"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-blue mb-1">Short Excerpt</label>
                  <textarea
                    value={form.excerpt}
                    onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 min-h-20"
                    placeholder="A short summary people see on the blog card"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-deep-blue mb-1">Author Name</label>
                    <input
                      value={form.author}
                      onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                      placeholder="Author"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-deep-blue mb-1">Category</label>
                    <input
                      value={form.category}
                      onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                      placeholder="Leadership"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-blue mb-1">
                    Card Icon (emoji)
                  </label>
                  <input
                    value={form.image}
                    onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="📰"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-blue mb-1">Full Post Content</label>
                  <textarea
                    value={form.content}
                    onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 min-h-44"
                    placeholder="Write the full blog content here..."
                    required
                  />
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}
                {success && <p className="text-sm text-green-700">{success}</p>}

                <button
                  type="submit"
                  disabled={publishing}
                  className="px-5 py-2.5 rounded-lg bg-gold text-deep-blue font-bold hover:opacity-90 disabled:opacity-60"
                >
                  {publishing ? "Publishing..." : "Publish Post"}
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 bg-deep-blue/5 border border-gold/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-deep-blue mb-4">Recent Posts</h3>
              <div className="space-y-3 max-h-[620px] overflow-auto pr-1">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="rounded-lg bg-white border border-gold/20 px-3 py-2"
                  >
                    <p className="font-semibold text-deep-blue text-sm">{post.title}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {post.author} • {post.date}
                    </p>
                  </div>
                ))}
                {posts.length === 0 && (
                  <p className="text-sm text-gray-600">No posts yet.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
