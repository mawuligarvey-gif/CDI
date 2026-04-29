"use client";

import { FormEvent, useEffect, useState } from "react";

type Program = {
  id: number;
  title: string;
  icon: string;
  description: string;
  duration: string;
  benefits: string[];
  format: string;
  investment: string;
};

type SessionResponse = {
  authenticated: boolean;
};

function newProgram(id: number): Program {
  return {
    id,
    title: "",
    icon: "📘",
    description: "",
    duration: "",
    benefits: [],
    format: "",
    investment: "",
  };
}

export default function ProgramsAdminPage() {
  const [loadingSession, setLoadingSession] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [programs, setPrograms] = useState<Program[]>([]);
  const [loadingPrograms, setLoadingPrograms] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");

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
      setLoadingPrograms(false);
      return;
    }

    const loadPrograms = async () => {
      setLoadingPrograms(true);
      setError("");
      try {
        const response = await fetch("/api/admin/programs", { cache: "no-store" });
        const data = await response.json();
        if (!response.ok) {
          setError(data.error || "Could not load programs.");
          return;
        }
        setPrograms(Array.isArray(data.programs) ? data.programs : []);
      } catch {
        setError("Could not load programs.");
      } finally {
        setLoadingPrograms(false);
      }
    };

    void loadPrograms();
  }, [authenticated]);

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

  const updateProgram = (index: number, updates: Partial<Program>) => {
    setPrograms((current) =>
      current.map((item, i) => (i === index ? { ...item, ...updates } : item))
    );
  };

  const addProgram = () => {
    const nextId = programs.length > 0 ? Math.max(...programs.map((item) => item.id)) + 1 : 1;
    setPrograms((current) => [...current, newProgram(nextId)]);
  };

  const removeProgram = (index: number) => {
    setPrograms((current) => current.filter((_, i) => i !== index));
  };

  const handleSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);

    try {
      const response = await fetch("/api/admin/programs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ programs }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Could not save programs.");
        return;
      }

      setPrograms(Array.isArray(data.programs) ? data.programs : programs);
      setSuccess("Programs updated successfully.");
    } catch {
      setError("Could not save programs.");
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
        <h1 className="text-3xl font-bold text-primary mb-2">Programs Admin</h1>
        <p className="text-gray-600 mb-6">Update content on the Programs page without changing code.</p>

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
        ) : (
          <form onSubmit={handleSave} className="space-y-6">
            {loadingPrograms ? (
              <div>Loading programs...</div>
            ) : (
              programs.map((program, index) => (
                <div key={program.id} className="rounded-2xl border border-accent/30 p-5 bg-highlight/5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-primary">Program {index + 1}</h3>
                    <button
                      type="button"
                      onClick={() => removeProgram(index)}
                      className="text-sm px-3 py-1 rounded-lg border border-red-300 text-red-600 hover:bg-red-50"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      value={program.title}
                      onChange={(e) => updateProgram(index, { title: e.target.value })}
                      className="rounded-lg border border-gray-300 px-3 py-2"
                      placeholder="Title"
                      title="Program title"
                    />
                    <input
                      value={program.icon}
                      onChange={(e) => updateProgram(index, { icon: e.target.value })}
                      className="rounded-lg border border-gray-300 px-3 py-2"
                      placeholder="Icon emoji"
                      title="Program icon"
                    />
                    <input
                      value={program.duration}
                      onChange={(e) => updateProgram(index, { duration: e.target.value })}
                      className="rounded-lg border border-gray-300 px-3 py-2"
                      placeholder="Duration"
                      title="Program duration"
                    />
                    <input
                      value={program.investment}
                      onChange={(e) => updateProgram(index, { investment: e.target.value })}
                      className="rounded-lg border border-gray-300 px-3 py-2"
                      placeholder="Investment"
                      title="Program investment"
                    />
                    <input
                      value={program.format}
                      onChange={(e) => updateProgram(index, { format: e.target.value })}
                      className="rounded-lg border border-gray-300 px-3 py-2 md:col-span-2"
                      placeholder="Format"
                      title="Program format"
                    />
                    <textarea
                      value={program.description}
                      onChange={(e) => updateProgram(index, { description: e.target.value })}
                      className="rounded-lg border border-gray-300 px-3 py-2 min-h-20 md:col-span-2"
                      placeholder="Description"
                      title="Program description"
                    />
                    <textarea
                      value={program.benefits.join("\n")}
                      onChange={(e) =>
                        updateProgram(index, {
                          benefits: e.target.value.split("\n").map((item) => item.trim()).filter(Boolean),
                        })
                      }
                      className="rounded-lg border border-gray-300 px-3 py-2 min-h-28 md:col-span-2"
                      placeholder="One benefit per line"
                      title="Program benefits"
                    />
                  </div>
                </div>
              ))
            )}

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={addProgram}
                className="px-4 py-2 rounded-lg border border-tertiary text-tertiary font-semibold hover:bg-tertiary/10"
              >
                Add Program
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2 rounded-lg bg-tertiary text-white font-bold disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Programs"}
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
