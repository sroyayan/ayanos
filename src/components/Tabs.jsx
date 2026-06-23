export default function Tabs({ page }) {
  return (
    <div
      style={{
        height: "40px",
        background: "#0d1117",
        borderBottom: "1px solid #30363d",
        display: "flex",
        alignItems: "center",
        paddingLeft: "20px",
      }}
    >
      <div
        style={{
          background: "#161b22",
          padding: "8px 16px",
          borderRadius: "6px 6px 0 0",
        }}
      >
        {page}
      </div>
    </div>
  );
}