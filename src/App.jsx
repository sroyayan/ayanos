import { useState } from "react";

import BootScreen from "./components/BootScreen";
import Sidebar from "./components/Sidebar";
import Terminal from "./components/Terminal";

import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Timeline from "./pages/Timeline";

export default function App() {
  const [bootFinished, setBootFinished] = useState(false);
  const [page, setPage] = useState("dashboard.sys");

  if (!bootFinished) {
    return (
      <BootScreen
        onFinish={() => setBootFinished(true)}
      />
    );
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#0d1117",
        color: "white",
      }}
    >
      <Sidebar setPage={setPage} />

      <main
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
        }}
      >
        {page === "dashboard.sys" && <Dashboard />}

        {page === "about.ts" && <About />}

        {page === "skills.json" && <Skills />}

        {page === "timeline.md" && <Timeline />}

        {page === "terminal.exe" && <Terminal />}

        {page === "projects.jsx" && (
          <h1>Projects Coming Soon...</h1>
        )}

        {page === "resume.pdf" && (
          <h1>Resume Coming Soon...</h1>
        )}

        {page === "contact.md" && (
          <h1>Contact Coming Soon...</h1>
        )}
      </main>
    </div>
  );
}