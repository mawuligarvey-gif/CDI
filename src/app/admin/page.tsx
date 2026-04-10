"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type SessionResponse = {
  usingDefaultPassword: boolean;
};

const adminSections = [
  {
    title: "Admin Blog",
    description: "Publish and manage blog content.",
    href: "/admin/blog",
  },
  {
    title: "Admin Programs",
    description: "Update programs content shown on the public page.",
    href: "/admin/programs",
  },
  {
    title: "Admin Conference",
    description: "Manage conference details and upload flyers.",
    href: "/admin/conference",
  },
];

export default function AdminPortalPage() {
  const [loadingSession, setLoadingSession] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [usingDefaultPassword, setUsingDefaultPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showReset, setShowReset] = useState(false);
  const [recoveryKey, setRecoveryKey] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetError, setResetError] = useState("");
  const [resetSuccess, setResetSuccess] = useState("");
  const [resetting, setResetting] = useState(false);

  useEffect(() => {
    const loadSession = async () => {
      try {
        const response = await fetch("/api/admin/session", { cache: "no-store" });
        const data = (await response.json()) as SessionResponse;
        setUsingDefaultPassword(Boolean(data.usingDefaultPassword));
      } catch {
        setError("Could not load admin session.");
      } finally {
        setLoadingSession(false);
      }
    };

    void loadSession();
  }, []);

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
      setUsingDefaultPassword(Boolean(data.usingDefaultPassword));
      setPassword("");
    } catch {
      setError("Could not login right now.");
    }
  };

  const handleReset = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResetError("");
    setResetSuccess("");

    if (!recoveryKey || !newPassword || !confirmPassword) {
      setResetError("Please fill in all reset fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setResetError("New password and confirmation do not match.");
      return;
    }

    setResetting(true);

    try {
      const response = await fetch("/api/admin/password/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recoveryKey, newPassword, confirmPassword }),
      });

      const data = await response.json();
      if (!response.ok) {
        setResetError(data.error || "Could not reset password.");
        return;
      }

      setAuthenticated(true);
      setUsingDefaultPassword(Boolean(data.usingDefaultPassword));
      setRecoveryKey("");
      setNewPassword("");
      setConfirmPassword("");
      setResetSuccess("Password reset successful. You are now signed in.");
    } catch {
      setResetError("Could not reset password right now.");
    } finally {
      setResetting(false);
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
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white via-gold/5 to-deep-blue/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {!authenticated ? (
          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl bg-white border border-gold/30 shadow-lg overflow-hidden"
            >
              <div className="bg-deep-blue text-white p-7 text-center">
                <div className="mx-auto mb-3 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Image
                    src="/images/gallery/logo.png"
                    alt="CDI Logo"
                    width={46}
                    height={46}
                    className="h-auto"
                    priority
                  />
                </div>
                <h1 className="text-2xl font-bold">CDI Admin Portal</h1>
                <p className="text-sm text-gray-200 mt-1">One secure link for Blog, Programs, and Conference management.</p>
              </div>

              <div className="p-7 space-y-5">
                {usingDefaultPassword && (
                  <div className="rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
                    Security note: default admin password is still active. Please update it after sign in.
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-deep-blue mb-1">Admin Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold/60"
                      placeholder="Enter admin password"
                      title="Admin password"
                      required
                    />
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <button
                    type="submit"
                    className="w-full px-4 py-2.5 rounded-lg bg-gold text-deep-blue font-bold hover:opacity-90 transition-opacity"
                  >
                    Sign In
                  </button>
                </form>

                <div className="border-t border-gold/20 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowReset((current) => !current)}
                    className="text-sm font-semibold text-gold hover:underline"
                  >
                    Forgot password? Reset with recovery key
                  </button>

                  {showReset && (
                    <form onSubmit={handleReset} className="mt-4 space-y-3">
                      <input
                        type="password"
                        value={recoveryKey}
                        onChange={(e) => setRecoveryKey(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2"
                        placeholder="Recovery key"
                        title="Recovery key"
                        required
                      />
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2"
                        placeholder="New password (min 10 characters)"
                        title="New password"
                        minLength={10}
                        required
                      />
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2"
                        placeholder="Confirm new password"
                        title="Confirm new password"
                        minLength={10}
                        required
                      />

                      {resetError && <p className="text-sm text-red-600">{resetError}</p>}
                      {resetSuccess && <p className="text-sm text-green-700">{resetSuccess}</p>}

                      <button
                        type="submit"
                        disabled={resetting}
                        className="w-full px-4 py-2 rounded-lg bg-deep-blue text-white font-semibold disabled:opacity-60"
                      >
                        {resetting ? "Resetting..." : "Reset Password"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <div>
            <div className="mb-8 text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-2">Admin Portal</h1>
              <p className="text-gray-600">Choose what you want to manage.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {adminSections.map((section, index) => (
                <motion.div
                  key={section.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-gold/30 bg-white p-6 shadow-sm"
                >
                  <h2 className="text-xl font-bold text-deep-blue mb-2">{section.title}</h2>
                  <p className="text-sm text-gray-600 mb-5">{section.description}</p>
                  <Link
                    href={section.href}
                    className="inline-block px-4 py-2 rounded-lg bg-gold text-deep-blue font-bold hover:opacity-90"
                  >
                    Open Section
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
