export default function Dashboard() {
  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "18px",
          textAlign: "center",
        }}
      >
        Ayan Singha Roy
      </h1>

      <p
        style={{
          color: "#8b949e",
          textAlign: "center",
          fontSize: "1rem",
          marginBottom: "35px",
        }}
      >
        Learning. Building. Improving.
      </p>

      <p
        style={{
          color: "#6e7681",
          fontSize: "0.85rem",
          letterSpacing: "3px",
          textAlign: "center",
          marginBottom: "25px",
          textTransform: "uppercase",
        }}
      >
        System Status
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        <div className="card">
          <h3>CGPA</h3>
          <p className="card-value">7.48</p>
        </div>

        <div className="card">
          <h3>LeetCode</h3>
          <p className="card-value">22 Solved</p>
        </div>

        <div className="card">
          <h3>Status</h3>
          <p className="card-value status-green">
            BUILDING
          </p>
        </div>

        <div className="card">
          <h3>GitHub</h3>
          <p className="card-value">ACTIVE</p>
        </div>

        <div className="card">
          <h3>Focus</h3>
          <p className="card-value-small">
            Web Development
          </p>
        </div>
      </div>
    </div>
  );
}