import { useState } from "react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const commands = {
    help: `
about
skills
timeline
clear
`,
    about: "Ayan Singha Roy | AIML Student",
    skills: "Python, JavaScript, Git, React",
    timeline: "2024 -> 2026 Journey Loaded"
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
      `> ${input}`,
      commands[input] || "Command not found"
    ]);

    setInput("");
  };

  return (
    <div>
      <h1>terminal.exe</h1>

      {output.map((line, index) => (
        <div key={index}>{line}</div>
      ))}

      <form onSubmit={handleCommand}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}