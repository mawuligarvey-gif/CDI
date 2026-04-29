"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";

type ConferenceFlyer = {
  title: string;
  imageUrl: string;
};

type ConferenceContent = {
  title: string;
  subtitle: string;
  location: string;
  keyStats: Array<{ icon: "users" | "ticket" | "calendar"; label: string; desc: string }>;
  highlights: string[];
  schedule: Array<{ time: string; event: string; hall: string }>;
  speakers: Array<{ name: string; role: string; image: string }>;
  flyers: ConferenceFlyer[];
  ctaTitle: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
};

type SessionResponse = {
  authenticated: boolean;
};

const initialContent: ConferenceContent = {
  title: "Cultural Diplomat Impact Conference",
  subtitle: "",
  location: "",
  keyStats: [
    { icon: "users", label: "", desc: "" },
    { icon: "ticket", label: "", desc: "" },
    { icon: "calendar", label: "", desc: "" },
  ],
  highlights: [],
  schedule: [],
  speakers: [],
  flyers: [],
  ctaTitle: "Don't Miss Out",
  ctaText: "",
  ctaButtonText: "Register Today",
  ctaHref: "/apply",
};

export default function ConferenceAdminPage() {
  const [loadingSession, setLoadingSession] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [content, setContent] = useState<ConferenceContent>(initialContent);
  const [loadingContent, setLoadingContent] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");

  const [flyerFile, setFlyerFile] = useState<File | null>(null);
  const [flyerTitle, setFlyerTitle] = useState("Conference Flyer");
  const [uploadingFlyer, setUploadingFlyer] = useState(false);

  useEffect(() => {
    const loadSession = async () => {
      try {
        const response = await fetch("/api/admin/session", { cache: "no-store" });
        const data = (await response.json()) as SessionResponse;
        setAuthenticated(Boolean(data.authenticated));
      } catch {
        setError("Could not load admin session.");
      } finally {
        setLoadingSession(false);
      }
    };

    void loadSession();
  }, []);

  useEffect(() => {
    if (!authenticated) {
      setLoadingContent(false);
      return;
    }

    const loadContent = async () => {
      setLoadingContent(true);
      setError("");
      try {
        const response = await fetch("/api/admin/conference", { cache: "no-store" });
        const data = await response.json();
        if (!response.ok) {
          setError(data.error || "Could not load conference content.");
          return;
        }
        setContent(data.conference as ConferenceContent);
      } catch {
        setError("Could not load conference content.");
      } finally {
        setLoadingContent(false);
      }
    };

    void loadContent();
  }, [authenticated]);

  const highlightsText = useMemo(() => content.highlights.join("\n"), [content.highlights]);
  const scheduleText = useMemo(
    () => content.schedule.map((item) => `${item.time} | ${item.event} | ${item.hall}`).join("\n"),
    [content.schedule]
  );
  const speakersText = useMemo(
    () => content.speakers.map((item) => `${item.name} | ${item.role} | ${item.image}`).join("\n"),
    [content.speakers]
  );

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

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
    } catch {
      setError("Could not login right now.");
    }
  };

  const handleUploadFlyer = async () => {
    if (!flyerFile) {
      setError("Please choose a flyer image first.");
      return;
    }

    setError("");
    setSuccess("");
    setUploadingFlyer(true);

    try {
      const formData = new FormData();
      formData.append("file", flyerFile);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Could not upload flyer.");
        return;
      }

      setContent((current) => ({
        ...current,
        flyers: [
          ...current.flyers,
          {
            title: flyerTitle.trim() || "Conference Flyer",
            imageUrl: String(data.url),
          },
        ],
      }));

      setFlyerFile(null);
      setFlyerTitle("Conference Flyer");
      setSuccess("Flyer uploaded. Click Save Conference Content to publish.");
    } catch {
      setError("Could not upload flyer.");
    } finally {
      setUploadingFlyer(false);
    }
  };

  const handleSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);

    try {
      const response = await fetch("/api/admin/conference", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ conference: content }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Could not save conference content.");
        return;
      }

      setContent(data.conference as ConferenceContent);
      setSuccess("Conference content updated successfully.");
    } catch {
      setError("Could not save conference content.");
    } finally {
      setSaving(false);
    }
  };

  if (loadingSession) {
    return <div className="min-h-screen pt-24 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Conference Admin</h1>
        <p className="text-gray-600 mb-6">Update conference details and upload event flyers.</p>

        {!authenticated ? (
          <div className="max-w-md bg-white border border-accent/30 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-primary mb-4">Sign In</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-primary mb-1">Admin Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Enter password"
                  title="Admin password"
                  required
                />
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button type="submit" className="w-full px-4 py-2 rounded-lg bg-tertiary text-white font-bold">
                Login
              </button>
            </form>
          </div>
        ) : loadingContent ? (
          <div>Loading conference content...</div>
        ) : (
          <form onSubmit={handleSave} className="space-y-8">
            <div className="rounded-2xl border border-accent/30 p-6 bg-highlight/5 space-y-4">
              <h2 className="text-xl font-bold text-primary">Hero Content</h2>
              <input
                value={content.title}
                onChange={(e) => setContent((current) => ({ ...current, title: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="Conference title"
                title="Conference title"
              />
              <textarea
                value={content.subtitle}
                onChange={(e) => setContent((current) => ({ ...current, subtitle: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 min-h-20"
                placeholder="Conference subtitle"
                title="Conference subtitle"
              />
              <input
                value={content.location}
                onChange={(e) => setContent((current) => ({ ...current, location: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="Location"
                title="Conference location"
              />
            </div>

            <div className="rounded-2xl border border-accent/30 p-6 bg-white space-y-4">
              <h2 className="text-xl font-bold text-primary">Conference Details</h2>
              <textarea
                value={highlightsText}
                onChange={(e) =>
                  setContent((current) => ({
                    ...current,
                    highlights: e.target.value.split("\n").map((item) => item.trim()).filter(Boolean),
                  }))
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 min-h-28"
                placeholder="Highlights (one per line)"
                title="Conference highlights"
              />
              <textarea
                value={scheduleText}
                onChange={(e) =>
                  setContent((current) => ({
                    ...current,
                    schedule: e.target.value
                      .split("\n")
                      .map((line) => line.trim())
                      .filter(Boolean)
                      .map((line) => {
                        const [time = "", event = "", hall = ""] = line.split("|").map((part) => part.trim());
                        return { time, event, hall };
                      }),
                  }))
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 min-h-32"
                placeholder="Schedule lines: time | event | hall"
                title="Conference schedule"
              />
              <textarea
                value={speakersText}
                onChange={(e) =>
                  setContent((current) => ({
                    ...current,
                    speakers: e.target.value
                      .split("\n")
                      .map((line) => line.trim())
                      .filter(Boolean)
                      .map((line) => {
                        const [name = "", role = "", image = "🎤"] = line.split("|").map((part) => part.trim());
                        return { name, role, image: image || "🎤" };
                      }),
                  }))
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 min-h-28"
                placeholder="Speakers lines: name | role | image(emoji)"
                title="Conference speakers"
              />
            </div>

            <div className="rounded-2xl border border-accent/30 p-6 bg-highlight/5 space-y-4">
              <h2 className="text-xl font-bold text-primary">Conference Flyers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
                <input
                  value={flyerTitle}
                  onChange={(e) => setFlyerTitle(e.target.value)}
                  className="rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Flyer title"
                  title="Flyer title"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFlyerFile(e.target.files?.[0] || null)}
                  className="rounded-lg border border-gray-300 px-3 py-2"
                  title="Upload flyer image"
                />
                <button
                  type="button"
                  onClick={handleUploadFlyer}
                  disabled={uploadingFlyer}
                  className="px-4 py-2 rounded-lg bg-primary text-white font-semibold disabled:opacity-60"
                >
                  {uploadingFlyer ? "Uploading..." : "Upload Flyer"}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {content.flyers.map((flyer, index) => (
                  <div key={`${flyer.imageUrl}-${index}`} className="rounded-xl border border-accent/30 bg-white p-3">
                    <div className="relative h-40 rounded-lg overflow-hidden bg-gray-100">
                      <Image src={flyer.imageUrl} alt={flyer.title} fill className="object-cover" />
                    </div>
                    <p className="text-sm font-semibold text-primary mt-2">{flyer.title}</p>
                    <button
                      type="button"
                      onClick={() =>
                        setContent((current) => ({
                          ...current,
                          flyers: current.flyers.filter((_, i) => i !== index),
                        }))
                      }
                      className="mt-2 text-sm text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-accent/30 p-6 bg-white space-y-3">
              <h2 className="text-xl font-bold text-primary">Call To Action</h2>
              <input
                value={content.ctaTitle}
                onChange={(e) => setContent((current) => ({ ...current, ctaTitle: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="CTA title"
                title="CTA title"
              />
              <textarea
                value={content.ctaText}
                onChange={(e) => setContent((current) => ({ ...current, ctaText: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 min-h-20"
                placeholder="CTA text"
                title="CTA text"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  value={content.ctaButtonText}
                  onChange={(e) => setContent((current) => ({ ...current, ctaButtonText: e.target.value }))}
                  className="rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Button text"
                  title="CTA button text"
                />
                <input
                  value={content.ctaHref}
                  onChange={(e) => setContent((current) => ({ ...current, ctaHref: e.target.value }))}
                  className="rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Button link"
                  title="CTA button link"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2 rounded-lg bg-tertiary text-white font-bold disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Conference Content"}
              </button>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}
            {success && <p className="text-sm text-green-700">{success}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
