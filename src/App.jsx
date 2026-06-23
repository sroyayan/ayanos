import { useState } from "react";
import BootScreen from "./components/BootScreen";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Tabs from "./components/Tabs";
import Terminal from "./components/Terminal";
import Projects from "./pages/Projects";
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
        height: "100vh",
        background: "#0d1117",
        color: "white",
      }}
    >
      <TopBar />

      <div
        style={{
          display: "flex",
          height: "calc(100vh - 45px)",
          overflow: "hidden",
        }}
      >
        <Sidebar
          setPage={setPage}
          currentPage={page}
        />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Tabs page={page} />

          <main
            style={{
              flex: 1,
              padding: "25px",
              overflowY: "auto",
              background: "#0d1117",
              minHeight: "100%",
            }}
          >
          
            {page === "dashboard.sys" && (
              <Dashboard />
            )}

            {page === "about.ts" && (
              <About />
            )}

            {page === "skills.json" && (
              <Skills />
            )}

            {page === "timeline.md" && (
              <Timeline />
            )}

            {page === "terminal.exe" && (
              <Terminal />
            )}

            {page === "projects.jsx" && (
              <Projects />
            )}

            {page === "resume.pdf" && (
              <div>
                <h1>resume.pdf</h1>
                <p>Resume coming soon...</p>
              </div>
            )}

            {page === "contact.md" && (
              <div>
                <h1>contact.md</h1>
                <p>Contact section coming soon...</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}