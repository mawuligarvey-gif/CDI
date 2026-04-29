"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

type SessionResponse = {
  authenticated: boolean;
  usingDefaultPassword: boolean;
};

export default function AdminSettingsPage() {
  const [loadingSession, setLoadingSession] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [usingDefaultPassword, setUsingDefaultPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");

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
      setUsingDefaultPassword(Boolean(data.usingDefaultPassword));
    } catch {
      setError("Could not login right now.");
    }
  };

  const handlePasswordChange = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Please fill in all password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }

    setSaving(true);

    try {
      const response = await fetch("/api/admin/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword,
          newPassword,
          confirmPassword,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Could not update password.");
        return;
      }

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setUsingDefaultPassword(Boolean(data.usingDefaultPassword));
      setSuccess("Password updated successfully.");
    } catch {
      setError("Could not update password.");
    } finally {
      setSaving(false);
    }
  };

  if (loadingSession) {
    return (
      <div className="min-h-screen pt-24 bg-white flex items-center justify-center text-primary">
        Loading settings...
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Admin Settings</h1>
        <p className="text-gray-600 mb-6">Change your admin password from one dedicated place.</p>

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
          <div className="bg-white border border-accent/30 rounded-2xl p-6 shadow-sm">
            {usingDefaultPassword && (
              <div className="mb-4 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
                Security note: You are using the default admin password.
              </div>
            )}

            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-primary mb-1">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Enter current password"
                  title="Current password"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-1">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Enter new password"
                  title="New password"
                  minLength={10}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-1">Confirm New Password</label>
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
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}
              {success && <p className="text-sm text-green-700">{success}</p>}

              <button
                type="submit"
                disabled={saving}
                className="w-full px-4 py-2 rounded-lg bg-primary text-white font-semibold disabled:opacity-60"
              >
                {saving ? "Updating..." : "Update Password"}
              </button>
            </form>
          </div>
        )}

        <div className="mt-6">
          <Link href="/admin" className="text-tertiary font-semibold hover:underline underline-offset-4">
            Back to Admin Portal
          </Link>
        </div>
      </div>
    </div>
  );
}
