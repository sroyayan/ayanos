export default function Projects() {
  const projects = [
    {
      title: "AyanOS Portfolio",
      tech: "React • Git • UI/UX",
      desc: "Operating system themed portfolio built from scratch.",
    },
    {
      title: "Morse Code Converter",
      tech: "Python • Audio • Encoding",
      desc: "Converts text into Morse code and plays audio signals.",
    },
    {
      title: "DownTube",
      tech: "Python • yt-dlp • GUI",
      desc: "YouTube downloader with playlist and quality support.",
    },
  ];

  return (
    <div>
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "10px",
        }}
      >
        projects.jsx
      </h1>

      <p
        style={{
          color: "#8b949e",
          marginBottom: "30px",
        }}
      >
        Things I've built.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="project-card"
          >
            <h2>{project.title}</h2>

            <p className="project-tech">
              {project.tech}
            </p>

            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}