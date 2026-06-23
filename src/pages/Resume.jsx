export default function Resume() {
  return (
    <div>
      <h1>resume.pdf</h1>

      <div className="resume-card">
        <h2>Ayan Singha Roy</h2>

        <p>B.Tech CSE (AI & ML)</p>

        <p>CGPA: 7.48</p>

        <p>
          Aspiring Software Engineer focused on
          Web Development and AI/ML.
        </p>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "15px",
          }}
        >
          <button className="action-btn">
            Download Resume
          </button>

          <button className="action-btn">
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
}