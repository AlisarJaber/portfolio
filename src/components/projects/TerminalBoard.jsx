export default function TerminalBoard() {
  return (
    <div className="terminal-board">
      <div className="terminal-board-top">
        <div>
          <p className="terminal-label">INTERNATIONAL TERMINAL</p>
          <h2>Gate A12</h2>
        </div>

        <div className="terminal-status">NOW BOARDING</div>
      </div>

      <div className="terminal-board-row">
        <div>
          <span>FLIGHT</span>
          <strong>PRJ2024</strong>
        </div>

        <div>
          <span>DESTINATION</span>
          <strong>Projects Hub</strong>
        </div>

        <div>
          <span>GATE</span>
          <strong>A12</strong>
        </div>
      </div>
    </div>
  );
}