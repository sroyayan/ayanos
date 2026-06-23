import { useState } from "react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    "Welcome to AyanOS Terminal",
    "Type 'help' to see available commands",
  ]);

  const commands = {
    help: `
about
skills
timeline
clear
`,
    about: "Ayan Singha Roy | AIML Student",
    skills: "Python, JavaScript, Git, React",
    timeline: "2024 -> 2026 Journey Loaded",
  };

  const handleCommand = (e) => {
    e.preventDefault();

    if (input === "clear") {
      setOutput([]);
      setInput("");
      return;
    }

    setOutput([
      ...output,
      `guest@ayanos:~$ ${input}`,
      commands[input] || "Command not found",
    ]);

    setInput("");
  };

  return (
    <div
      style={{
        background: "#010409",
        minHeight: "500px",
        padding: "20px",
        borderRadius: "10px",
        fontFamily: "monospace",
        textAlign: "left",
      }}
    >
      <h1
        style={{
          marginBottom: "20px",
        }}
      >
        terminal.exe
      </h1>

      {output.map((line, index) => (
        <div
          key={index}
          style={{
            marginBottom: "5px",
          }}
        >
          {line}
        </div>
      ))}

      <form onSubmit={handleCommand}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Want help? Type 'help' and press Enter..."
          style={{
            background: "#161b22",
            color: "white",
            border: "1px solid #30363d",
            padding: "8px",
            width: "300px",
          }}
        />
      </form>
    </div>
  );
}