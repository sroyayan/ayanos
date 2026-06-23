import { useState } from "react";

import BootScreen from "./components/BootScreen";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";

export default function App() {

  const [bootFinished, setBootFinished] = useState(false);

  const [page, setPage] =
    useState("dashboard.sys");

  if (!bootFinished) {
    return (
      <BootScreen
        onFinish={() =>
          setBootFinished(true)
        }
      />
    );
  }

  return (
    <div className="layout">

      <Sidebar setPage={setPage} />

      <main>

        {page === "dashboard.sys" && (
          <Dashboard />
        )}

      </main>

    </div>
  );
}