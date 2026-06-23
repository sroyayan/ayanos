const files = [
  "dashboard.sys",
  "about.ts",
  "skills.json",
  "timeline.md",
  "terminal.exe",
  "projects.jsx",
  "resume.pdf",
  "contact.md",
];

const icons = {
  "dashboard.sys": "📊",
  "about.ts": "📄",
  "skills.json": "📄",
  "timeline.md": "🗓️",
  "terminal.exe": "⚡",
  "projects.jsx": "📁",
  "resume.pdf": "📄",
  "contact.md": "📨",
};

export default function Sidebar({
  setPage,
  currentPage,
}) {
  return (
    <div
      style={{
        width: "250px",
        background: "#161b22",
        color: "white",
        padding: "20px",
        height: "100%",
        overflow: "hidden",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src="/profile.jpg"
        alt="Ayan"
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid #58a6ff",
          marginBottom: "15px",
        }}
      />

      <h2
        style={{
          margin: "0",
          textAlign: "center",
        }}
      >
        Ayan Singha Roy
      </h2>

      <p
        style={{
          color: "#8b949e",
          marginTop: "8px",
          marginBottom: "10px",
        }}
      >
        CSE (AI & ML)
      </p>

      <p
        style={{
          color: "#3fb950",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        ● ONLINE
      </p>

      <h2
        style={{
          marginBottom: "15px",
        }}
      >
        Explorer
      </h2>

      <div
        style={{
          width: "100%",
          flex: 1,
          overflowY: "auto",
          paddingRight: "5px",
        }}
      >
        {files.map((file) => (
          <button
            key={file}
            onClick={() => setPage(file)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "10px",

              background:
                currentPage === file
                  ? "#0d1117"
                  : "#7a7a7a",

              color: "white",

              border:
                currentPage === file
                  ? "2px solid #58a6ff"
                  : "none",

              cursor: "pointer",
              textAlign: "center",
            }}
          >
            {icons[file]} {file}
          </button>
        ))}
      </div>
    </div>
  );
}