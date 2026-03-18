import DashboardShell from "../components/DashboardShell";

const stats = [
  { title: "Submissions", value: "28/36", note: "This week" },
  { title: "Approvals", value: "12", note: "Pending" },
  { title: "Utilisation", value: "78%", note: "Billable" },
  { title: "Overtime", value: "26 hrs", note: "Awaiting payroll" },
];

const approvals = [
  { name: "Project Orion", owner: "Aisha Khan", hours: "42 hrs" },
  { name: "Project Nova", owner: "Rohan Das", hours: "38 hrs" },
  { name: "Internal", owner: "Neha Rao", hours: "16 hrs" },
];

const utilisation = [
  { project: "Orion", billable: "82%", budget: "120/160 hrs" },
  { project: "Nova", billable: "74%", budget: "90/140 hrs" },
  { project: "Atlas", billable: "67%", budget: "48/80 hrs" },
];

export default function TimesheetsPage() {
  return (
    <DashboardShell
      label="Timesheets"
      title="Timesheet approvals"
      subtitle="Weekly submissions, utilisation tracking, and billing readiness."
      actions={<button className="btn btn-ghost">Export hours</button>}
    >
      <section className="card panel form-card">
        <div className="panel-header">
          <div>
            <h3>New time entry</h3>
            <p>Capture daily activity against projects and tasks.</p>
          </div>
          <button className="btn btn-ghost">Start timer</button>
        </div>
        <div className="form-grid">
          <div className="field">
            <label>Project</label>
            <select>
              <option>Project Orion</option>
              <option>Project Nova</option>
              <option>Internal</option>
            </select>
          </div>
          <div className="field">
            <label>Task</label>
            <select>
              <option>Development</option>
              <option>Testing</option>
              <option>Meetings</option>
            </select>
          </div>
          <div className="field">
            <label>Date</label>
            <input type="date" />
          </div>
          <div className="field">
            <label>Hours</label>
            <input placeholder="8" />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea placeholder="Work summary" />
          </div>
        </div>
        <div className="form-actions">
          <button className="btn btn-ghost">Save draft</button>
          <button className="btn btn-primary">Add entry</button>
        </div>
      </section>

      <section className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.title} className="card stat-card">
            <p>{stat.title}</p>
            <h2>{stat.value}</h2>
            <span>{stat.note}</span>
          </div>
        ))}
      </section>

      <section className="split">
        <div className="card panel">
          <div className="panel-header">
            <div>
              <h3>Approval queue</h3>
              <p>Timesheets waiting on manager review.</p>
            </div>
            <button className="btn btn-ghost">Review</button>
          </div>
          <div className="list">
            {approvals.map((item) => (
              <div key={item.name} className="list-item">
                <div>
                  <strong>{item.name}</strong>
                  <span>Owner: {item.owner}</span>
                </div>
                <span className="pill">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card panel">
          <div className="panel-header">
            <div>
              <h3>Project utilisation</h3>
              <p>Billable vs budgeted hours.</p>
            </div>
            <button className="btn btn-ghost">View report</button>
          </div>
          <div className="table">
            <div className="table-row table-head">
              <span>Project</span>
              <span>Billable</span>
              <span>Budget</span>
              <span>Status</span>
            </div>
            {utilisation.map((item) => (
              <div key={item.project} className="table-row">
                <span>{item.project}</span>
                <span>{item.billable}</span>
                <span>{item.budget}</span>
                <span className="pill">On track</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
