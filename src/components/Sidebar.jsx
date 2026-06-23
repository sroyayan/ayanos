const files = [
  "dashboard.sys",
  "about.ts",
  "skills.json",
  "timeline.md",
  "terminal.exe",
  "projects.jsx",
  "resume.pdf",
  "contact.md"
];

export default function Sidebar({ setPage }) {
  return (
    <div
      style={{
        width: "250px",
        background: "#161b22",
        color: "white",
        padding: "20px"
      }}
    >
      <h3>Explorer</h3>

      {files.map((file) => (
        <button
          key={file}
          onClick={() => setPage(file)}
          style={{
            display: "block",
            margin: "10px 0",
            width: "100%"
          }}
        >
          {file}
        </button>
      ))}
    </div>
  );
}