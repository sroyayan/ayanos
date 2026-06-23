import { useEffect, useState } from "react";

export default function BootScreen({ onFinish }) {
  const lines = [
    "Initializing AyanOS...",
    "Loading Developer Profile...",
    "Loading Modules...",
    "Starting System...",
  ];

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onFinish();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onFinish]);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setTimeout(() => {
        onFinish();
      }, 1000);
      return;
    }

    let charIndex = 0;

    const typing = setInterval(() => {
      setCurrentText(lines[lineIndex].slice(0, charIndex + 1));
      charIndex++;

      if (charIndex > lines[lineIndex].length) {
        clearInterval(typing);

        setTimeout(() => {
          setDisplayedLines((prev) => [
            ...prev,
            lines[lineIndex],
          ]);

          setCurrentText("");
          setLineIndex((prev) => prev + 1);
        }, 250);
      }
    }, 40);

    return () => clearInterval(typing);
  }, [lineIndex]);

  return (
    <div
      style={{
        height: "100vh",
        background: "#050b12",
        color: "#00ff66",
        fontFamily: "Consolas, monospace",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "#58a6ff",
          marginBottom: "30px",
        }}
      >
        AyanOS v2.0
      </h1>

      {displayedLines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}

      <p>
        {currentText}
        <span
          style={{
            animation: "blink 1s infinite",
          }}
        >
          |
        </span>
      </p>

      <p
        style={{
          marginTop: "40px",
          color: "#888",
          fontSize: "14px",
        }}
      >
        Press ESC to Skip
      </p>
    </div>
  );
}