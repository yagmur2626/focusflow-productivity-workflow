"use client";

import { useState } from "react";

export default function AnalysisPage() {
  const [employeeName, setEmployeeName] = useState("");
  const [department, setDepartment] = useState("");
  const [focusTime, setFocusTime] = useState("");
  const [taskCompletion, setTaskCompletion] = useState("");
  const [distractionLevel, setDistractionLevel] = useState("Low");
  const [result, setResult] = useState("");

  const generateResult = () => {
    const focus = Number(focusTime);
    const task = Number(taskCompletion);

    if (!employeeName || !department || !focusTime || !taskCompletion) {
      setResult("Please fill in all fields.");
      return;
    }

    let penalty = 0;

    if (distractionLevel === "Medium") {
      penalty = 10;
    }

    if (distractionLevel === "High") {
      penalty = 20;
    }

    const score = Math.max(0, Math.round((focus + task) / 2 - penalty));

    if (score >= 75) {
      setResult(`${employeeName} has a strong productivity score: ${score}%`);
    } else if (score >= 50) {
      setResult(`${employeeName} has a medium productivity score: ${score}%`);
    } else {
      setResult(`${employeeName} has a low productivity score: ${score}%`);
    }
  };

  return (
    <main className="analysis-page">
      <section className="analysis-header">
        <a href="/" className="back-link">Back to Home</a>
        <h1>Productivity Analysis</h1>
        <p>
          Enter employee workflow data and generate a simple productivity result.
        </p>
      </section>

      <section className="form-card">
        <label>
          Employee Name
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder="Sample User"
          />
        </label>

        <label>
          Department
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="IT Department"
          />
        </label>

        <label>
          Focus Time %
          <input
            type="number"
            value={focusTime}
            onChange={(e) => setFocusTime(e.target.value)}
            placeholder="75"
          />
        </label>

        <label>
          Task Completion %
          <input
            type="number"
            value={taskCompletion}
            onChange={(e) => setTaskCompletion(e.target.value)}
            placeholder="80"
          />
        </label>

        <label>
          Distraction Level
          <select
            value={distractionLevel}
            onChange={(e) => setDistractionLevel(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>

        <button onClick={generateResult}>Generate Result</button>

        {result && (
          <div className="result-card">
            <h2>Result</h2>
            <p>{result}</p>
          </div>
        )}
      </section>
    </main>
  );
}
