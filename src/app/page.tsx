import DashboardShell from "./components/DashboardShell";

const stats = [
  { title: "Total Employees", value: "40", note: "+2 this month" },
  { title: "Pending Approvals", value: "12", note: "Leave, regularisation" },
  { title: "Payroll Status", value: "Draft", note: "March run" },
  { title: "Attendance Today", value: "92%", note: "3 WFH, 2 late" },
];

const tasks = [
  {
    title: "Complete offer letter review",
    meta: "Recruitment - 3 candidates",
  },
  { title: "Approve March leave requests", meta: "Leave - 6 pending" },
  { title: "Lock attendance for Feb", meta: "Attendance - due by 5th" },
  { title: "Upload PF challan", meta: "Payroll - Finance" },
];

const updates = [
  {
    title: "New joiner checklist created",
    meta: "Onboarding - Priya Sharma - 14 tasks",
  },
  {
    title: "Project Orion hours exceeded",
    meta: "Timesheets - 8% above budget",
  },
  {
    title: "Two-step approval triggered",
    meta: "Orders - Laptop purchase ₹68,000",
  },
];

export default function Home() {
  return (
    <DashboardShell
      label="HRMS Dashboard"
      title="Good afternoon, HR Team"
      subtitle="Here's what needs attention across people operations today."
      actions={<button className="btn btn-ghost">Download Report</button>}
    >
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
              <h3>Priority tasks</h3>
              <p>Actions that need attention this week.</p>
            </div>
            <button className="btn btn-ghost">See all</button>
          </div>
          <div className="list">
            {tasks.map((task) => (
              <div key={task.title} className="list-item">
                <div>
                  <strong>{task.title}</strong>
                  <span>{task.meta}</span>
                </div>
                <button className="btn btn-primary">Open</button>
              </div>
            ))}
          </div>
        </div>

        <div className="card panel">
          <div className="panel-header">
            <div>
              <h3>Live updates</h3>
              <p>Signals from onboarding, payroll, and projects.</p>
            </div>
            <button className="btn btn-ghost">View feed</button>
          </div>
          <div className="list">
            {updates.map((update) => (
              <div key={update.title} className="list-item ghost">
                <div>
                  <strong>{update.title}</strong>
                  <span>{update.meta}</span>
                </div>
                <span className="pill">New</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="card panel">
        <div className="panel-header">
          <div>
            <h3>Approvals queue</h3>
            <p>Manager approvals and finance sign-offs.</p>
          </div>
          <button className="btn btn-primary">Review all</button>
        </div>
        <div className="table">
          <div className="table-row table-head">
            <span>Request</span>
            <span>Owner</span>
            <span>Status</span>
            <span>Due</span>
          </div>
          <div className="table-row">
            <span>Leave request - 3 days</span>
            <span>Akash Mehta</span>
            <span className="pill">Pending</span>
            <span>Today</span>
          </div>
          <div className="table-row">
            <span>Regularisation - 2 days</span>
            <span>Neha Rao</span>
            <span className="pill">Pending</span>
            <span>Tomorrow</span>
          </div>
          <div className="table-row">
            <span>Order - Laptop</span>
            <span>IT Ops</span>
            <span className="pill">Finance</span>
            <span>Mar 21</span>
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
