const files = [
  { icon: "📊", name: "dashboard.sys" },
  { icon: "📄", name: "about.ts" },
  { icon: "📄", name: "skills.json" },
  { icon: "📅", name: "timeline.md" },
  { icon: "⚡", name: "terminal.exe" },
  { icon: "📁", name: "projects.jsx" },
  { icon: "📄", name: "resume.pdf" },
  { icon: "📨", name: "contact.md" },
];

export default function Sidebar({ setPage, currentPage }) {
  return (
    <div
      style={{
        width: "250px",
        background: "#161b22",
        color: "white",
        padding: "20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Explorer
      </h2>

      {files.map((file) => (
        <button
          key={file.name}
          onClick={() => setPage(file.name)}
          style={{
            display: "block",
            width: "100%",
            margin: "10px 0",
            padding: "10px",
            color: "white",
            cursor: "pointer",

            background:
              currentPage === file.name
                ? "#0d1117"
                : "#777",

            border:
              currentPage === file.name
                ? "2px solid #58a6ff"
                : "none",
          }}
        >
          {file.icon} {file.name}
        </button>
      ))}
    </div>
  );
}