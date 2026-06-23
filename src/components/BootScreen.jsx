import { useEffect, useState } from "react";

const lines = [
  "Initializing AyanOS...",
  "Loading Developer Profile...",
  "Loading Modules...",
  "Starting Workspace...",
  "System Ready."
];

export default function BootScreen({ onFinish }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [completedLines, setCompletedLines] = useState([]);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setTimeout(() => {
        onFinish();
      }, 1000);
      return;
    }

    const text = lines[currentLine];

    if (typedText.length < text.length) {
      const timeout = setTimeout(() => {
        setTypedText(text.slice(0, typedText.length + 1));
      }, 40);

      return () => clearTimeout(timeout);
    }

    const nextLine = setTimeout(() => {
      setCompletedLines(prev => [...prev, text]);
      setTypedText("");
      setCurrentLine(prev => prev + 1);
    }, 300);

    return () => clearTimeout(nextLine);

  }, [typedText, currentLine]);

  return (
    <div
      style={{
        background: "#0d1117",
        color: "#58a6ff",
        height: "100vh",
        padding: "40px",
        fontFamily: "monospace"
      }}
    >
      <h1>AyanOS v2.0</h1>

      {completedLines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}

      {currentLine < lines.length && (
        <p>
          {typedText}
          <span className="cursor">|</span>
        </p>
      )}
    </div>
  );
}