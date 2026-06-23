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
        <img
  src="/profile.jpg"
  alt="Ayan"
  style={{
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #58a6ff",
    display: "block",
    margin: "0 auto 10px",
  }}
/>

<h3
  style={{
    textAlign: "center",
    margin: "0",
  }}
>
  Ayan Singha Roy
</h3>

<p
  style={{
    textAlign: "center",
    color: "#8b949e",
    marginTop: "5px",
  }}
>
  CSE (AI & ML)
</p>

<p
  style={{
    textAlign: "center",
    color: "#3fb950",
    fontWeight: "bold",
  }}
>
  ● ONLINE
</p>
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