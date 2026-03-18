import DashboardShell from "../components/DashboardShell";

const stats = [
  { title: "New Joiners", value: "4", note: "Starting this month" },
  { title: "Tasks Pending", value: "18", note: "Across 4 checklists" },
  { title: "Docs Missing", value: "7", note: "Offer / IDs" },
  { title: "Completion Rate", value: "82%", note: "Target 95%" },
];

const checklists = [
  { name: "Priya Sharma", progress: 76, owner: "HR" },
  { name: "Akash Mehta", progress: 58, owner: "IT" },
  { name: "Nikita Rao", progress: 90, owner: "Finance" },
];

const docs = [
  { name: "Signed offer letter", count: "2 missing" },
  { name: "Photo ID verification", count: "3 missing" },
  { name: "Bank details", count: "2 missing" },
];

export default function OnboardingPage() {
  return (
    <DashboardShell
      label="Onboarding"
      title="New joiner readiness"
      subtitle="Track checklists, documents, and Day 1 readiness in real time."
      actions={<button className="btn btn-ghost">Create checklist</button>}
    >
      <section className="card panel form-card">
        <div className="panel-header">
          <div>
            <h3>Create onboarding checklist</h3>
            <p>Assign tasks to HR, IT, Finance, and the employee.</p>
          </div>
          <button className="btn btn-ghost">Use template</button>
        </div>
        <div className="form-grid">
          <div className="field">
            <label>Employee</label>
            <input placeholder="Select employee" />
          </div>
          <div className="field">
            <label>Checklist template</label>
            <select>
              <option>Standard onboarding</option>
              <option>Engineering onboarding</option>
              <option>Intern onboarding</option>
            </select>
          </div>
          <div className="field">
            <label>Task title</label>
            <input placeholder="Create email account" />
          </div>
          <div className="field">
            <label>Owner role</label>
            <select>
              <option>HR</option>
              <option>IT</option>
              <option>Finance</option>
              <option>Manager</option>
              <option>Employee</option>
            </select>
          </div>
          <div className="field">
            <label>Due date</label>
            <input type="date" />
          </div>
          <div className="field">
            <label>Attachment</label>
            <input placeholder="Optional file URL" />
          </div>
        </div>
        <div className="form-actions">
          <button className="btn btn-ghost">Cancel</button>
          <button className="btn btn-primary">Add task</button>
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
              <h3>Checklist progress</h3>
              <p>Live tracking across HR, IT, and Finance.</p>
            </div>
            <button className="btn btn-ghost">View all</button>
          </div>
          <div className="list">
            {checklists.map((item) => (
              <div key={item.name} className="list-item">
                <div>
                  <strong>{item.name}</strong>
                  <span>Owner: {item.owner}</span>
                </div>
                <div className="progress">
                  <span>{item.progress}%</span>
                  <div className="progress-track">
                    <div
                      className="progress-bar"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card panel">
          <div className="panel-header">
            <div>
              <h3>Documents pending</h3>
              <p>Required documents before activation.</p>
            </div>
            <button className="btn btn-ghost">Send reminder</button>
          </div>
          <div className="list">
            {docs.map((doc) => (
              <div key={doc.name} className="list-item ghost">
                <div>
                  <strong>{doc.name}</strong>
                  <span>{doc.count}</span>
                </div>
                <span className="pill">Action needed</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
