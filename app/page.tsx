export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <p className="badge">Productivity Workflow App</p>

        <h1>FocusFlow</h1>

        <p className="hero-text">
          FocusFlow is a productivity workflow application designed to simulate
          focus tracking and help evaluate employee productivity through a simple
          and clear analysis process.
        </p>

        <div className="button-group">
          <a href="#analysis" className="primary-button">
            Start Analysis
          </a>
          <a href="#features" className="secondary-button">
            View Features
          </a>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="feature-card">
          <h2>Focus Tracking</h2>
          <p>
            Simulates employee focus and attention levels during the work process.
          </p>
        </div>

        <div className="feature-card">
          <h2>Productivity Score</h2>
          <p>
            Shows a simple productivity result based on focus, task completion,
            and distraction level.
          </p>
        </div>

        <div className="feature-card">
          <h2>Workflow Review</h2>
          <p>
            Helps review work habits and gives a clear overview of the productivity
            process.
          </p>
        </div>
      </section>

      <section id="analysis" className="analysis-section">
        <h2>Productivity Analysis Preview</h2>

        <div className="analysis-box">
          <p><strong>Employee:</strong> Sample User</p>
          <p><strong>Focus Time:</strong> 75%</p>
          <p><strong>Distraction Level:</strong> Low</p>
          <p><strong>Task Completion:</strong> 82%</p>
          <p className="result-text">
            Result: The employee shows a good productivity level with stable focus.
          </p>
        </div>
      </section>
    </main>
  );
}
