import { useEffect, useState } from "react";
import {
  getCurrentSession,
  onAuthStateChange,
  signInWithEmail,
  signOut,
  signUpWithEmail,
} from "../../core/platform/auth";
import { getMyProfile } from "../../core/platform/profile";
import { getActiveTenseModules } from "../../core/platform/modules";
import {
  getMyModuleProgress,
  upsertMyPresentSimpleProgress,
} from "../../core/platform/progress";

import {
  getMyPresentSimpleModuleRow,
  getMyPresentSimpleRoomRows,
  savePresentSimpleRoomProgress,
  syncPresentSimpleModuleProgressFromRoomRows,
  getMyPresentSimpleTheoryRows,
  savePresentSimpleTheoryProgress,
} from "../../core/platform/present-simple-progress.js";

export default function PlatformProbePage() {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [modules, setModules] = useState([]);
  const [progress, setProgress] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [message, setMessage] = useState("");
  const [presentSimpleModuleRow, setPresentSimpleModuleRow] = useState(null);
  const [presentSimpleRoomRows, setPresentSimpleRoomRows] = useState([]);
  const [presentSimpleTheoryRows, setPresentSimpleTheoryRows] = useState([]);
  const [theorySectionId, setTheorySectionId] = useState("affirmative");

  async function refreshData() {
    try {
      const currentSession = await getCurrentSession();
      setSession(currentSession);

      const activeModules = await getActiveTenseModules();
      setModules(activeModules);

      if (currentSession) {
        const myProfile = await getMyProfile();
        const myProgress = await getMyModuleProgress();
        const myPresentSimpleModuleRow = await getMyPresentSimpleModuleRow();
        const myPresentSimpleRoomRows = await getMyPresentSimpleRoomRows();
        const myPresentSimpleTheoryRows = await getMyPresentSimpleTheoryRows();

        setProfile(myProfile);
        setProgress(myProgress);
        setPresentSimpleModuleRow(myPresentSimpleModuleRow);
        setPresentSimpleRoomRows(myPresentSimpleRoomRows);
        setPresentSimpleTheoryRows(myPresentSimpleTheoryRows);
      } else {
        setProfile(null);
        setProgress([]);
        setPresentSimpleModuleRow(null);
        setPresentSimpleRoomRows([]);
        setPresentSimpleTheoryRows([]);
      }
    } catch (error) {
      setMessage(error.message || "Something went wrong.");
    }
  }

  async function handleWritePresentSimpleTestRoom() {
    try {
      setMessage("Writing Present Simple test room...");

      await savePresentSimpleRoomProgress({
        sectionId: "affirmative",
        roomNumber: 1,
        roomState: {
          firstAttemptScore: 100,
          passed: true,
          hasKey: true,
        },
      });

      await refreshData();
      setMessage("Present Simple test room saved.");
    } catch (error) {
      setMessage(error.message || "Failed to save Present Simple test room.");
    }
  }

  async function handleWritePresentSimpleTheory() {
    try {
      setMessage("Writing Present Simple theory progress...");

      await savePresentSimpleTheoryProgress(theorySectionId);
      await refreshData();

      setMessage("Present Simple theory progress saved.");
    } catch (error) {
      setMessage(
        error.message || "Failed to save Present Simple theory progress.",
      );
    }
  }

  useEffect(() => {
    refreshData();

    const unsubscribe = onAuthStateChange(() => {
      refreshData();
    });

    return unsubscribe;
  }, []);

  async function handleSignUp(e) {
    e.preventDefault();
    setMessage("");

    try {
      await signUpWithEmail({
        email,
        password,
        displayName,
      });
      setMessage(
        "Sign up successful. Check your email if confirmation is enabled.",
      );
    } catch (error) {
      setMessage(error.message || "Sign up failed.");
    }
  }

  async function handleSignIn(e) {
    e.preventDefault();
    setMessage("");

    try {
      await signInWithEmail({ email, password });
      setMessage("Signed in successfully.");
    } catch (error) {
      setMessage(error.message || "Sign in failed.");
    }
  }

  async function handleSignOut() {
    setMessage("");

    try {
      await signOut();
      setMessage("Signed out successfully.");
    } catch (error) {
      setMessage(error.message || "Sign out failed.");
    }
  }

  async function handleSeedProgress() {
    setMessage("");

    try {
      await upsertMyPresentSimpleProgress();
      await refreshData();
      setMessage("Present Simple progress saved.");
    } catch (error) {
      setMessage(error.message || "Saving progress failed.");
    }
  }

  return (
    <main className="page page-pastel">
      <header className="page-header">
        <h1 className="page-title">Platform Probe</h1>
        <p className="page-subtitle">
          Temporary dev page for testing Supabase auth, profile, modules, and
          progress.
        </p>
      </header>

      <section className="card">
        <h2 className="card-title">Auth</h2>

        <form className="theory-section" onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Display name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="btn-row">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>

            <button
              type="button"
              className="btn btn-soft"
              onClick={handleSeedProgress}
            >
              Seed Present Simple Progress
            </button>

            <button
              type="button"
              className="btn btn-soft"
              onClick={handleSignIn}
            >
              Sign In
            </button>

            <button
              type="button"
              className="btn btn-outline"
              onClick={handleSignOut}
            >
              Sign Out
            </button>

            <button type="button" onClick={handleWritePresentSimpleTestRoom}>
              Write Present Simple Test Room
            </button>

            <input
              type="text"
              value={theorySectionId}
              onChange={(event) => setTheorySectionId(event.target.value)}
              placeholder="theory section id"
            />

            <button type="button" onClick={handleWritePresentSimpleTheory}>
              Write Present Simple Theory
            </button>
          </div>
        </form>

        {message ? <p>{message}</p> : null}
      </section>

      <section className="card">
        <h2 className="card-title">Session</h2>
        <pre>
          {JSON.stringify(
            session
              ? {
                  user: {
                    id: session.user?.id,
                    email: session.user?.email,
                    role: session.user?.role,
                  },
                  expires_at: session.expires_at,
                }
              : null,
            null,
            2,
          )}
        </pre>
      </section>

      <section className="card">
        <h2 className="card-title">Profile</h2>
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </section>

      <section className="card">
        <h2 className="card-title">Active modules</h2>
        <pre>{JSON.stringify(modules, null, 2)}</pre>
      </section>

      <section className="card">
        <h2 className="card-title">Module progress</h2>
        <pre>{JSON.stringify(progress, null, 2)}</pre>
      </section>

      <section>
        <h2>Present Simple Module Row</h2>
        <pre>{JSON.stringify(presentSimpleModuleRow, null, 2)}</pre>
      </section>

      <section>
        <h2>Present Simple Room Rows</h2>
        <pre>{JSON.stringify(presentSimpleRoomRows, null, 2)}</pre>
      </section>

      <section>
        <h2>Present Simple Theory Rows</h2>
        <pre>{JSON.stringify(presentSimpleTheoryRows, null, 2)}</pre>
      </section>
    </main>
  );
}
