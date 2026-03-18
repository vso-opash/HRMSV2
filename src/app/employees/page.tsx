import DashboardShell from "../components/DashboardShell";

const stats = [
  { title: "Active Employees", value: "36", note: "4 on notice" },
  { title: "Probation", value: "5", note: "Reviews due" },
  { title: "Contractors", value: "3", note: "Ends in 45 days" },
  { title: "Profiles Pending", value: "7", note: "Bank details missing" },
];

const directory = [
  {
    name: "Priya Sharma",
    dept: "Engineering",
    status: "Active",
    join: "12 Feb 2026",
  },
  { name: "Akash Mehta", dept: "Design", status: "Probation", join: "02 Mar 2026" },
  { name: "Neha Rao", dept: "Finance", status: "Active", join: "18 Jan 2025" },
  { name: "Rohan Das", dept: "Operations", status: "Notice", join: "08 Sep 2023" },
];

const departments = [
  { name: "Engineering", head: "Vikram Jain", count: "18" },
  { name: "Design", head: "Aisha Khan", count: "6" },
  { name: "Finance", head: "Neha Rao", count: "4" },
  { name: "Operations", head: "Rohan Das", count: "5" },
];

export default function EmployeesPage() {
  return (
    <DashboardShell
      label="Employee Master"
      title="Employee master data"
      subtitle="Single source of truth for profiles, roles, and reporting lines."
      actions={<button className="btn btn-ghost">Add employee</button>}
    >
      <section className="card panel form-card">
        <div className="panel-header">
          <div>
            <h3>Create employee record</h3>
            <p>Capture core details for onboarding and payroll setup.</p>
          </div>
          <button className="btn btn-ghost">Save draft</button>
        </div>
        <div className="form-grid">
          <div className="field">
            <label>Full name</label>
            <input placeholder="Full name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input placeholder="name@company.com" />
          </div>
          <div className="field">
            <label>Phone</label>
            <input placeholder="+91 98xxx xxxxx" />
          </div>
          <div className="field">
            <label>Employee ID</label>
            <input placeholder="EMP-2026-001" />
          </div>
          <div className="field">
            <label>Department</label>
            <select>
              <option>Engineering</option>
              <option>Design</option>
              <option>Finance</option>
              <option>Operations</option>
            </select>
          </div>
          <div className="field">
            <label>Designation</label>
            <input placeholder="Software Engineer" />
          </div>
          <div className="field">
            <label>Reporting manager</label>
            <input placeholder="Manager name" />
          </div>
          <div className="field">
            <label>Work location</label>
            <input placeholder="Ahmedabad" />
          </div>
          <div className="field">
            <label>Join date</label>
            <input type="date" />
          </div>
          <div className="field">
            <label>Employment type</label>
            <select>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Intern</option>
              <option>Contract</option>
            </select>
          </div>
          <div className="field">
            <label>CTC (annual)</label>
            <input placeholder="?8,00,000" />
          </div>
          <div className="field">
            <label>Status</label>
            <select>
              <option>Pending</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
        <div className="form-actions">
          <button className="btn btn-ghost">Cancel</button>
          <button className="btn btn-primary">Create employee</button>
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
              <h3>Employee directory</h3>
              <p>Latest updates and status changes.</p>
            </div>
            <button className="btn btn-ghost">Export CSV</button>
          </div>
          <div className="table">
            <div className="table-row table-head">
              <span>Name</span>
              <span>Department</span>
              <span>Status</span>
              <span>Join date</span>
            </div>
            {directory.map((person) => (
              <div key={person.name} className="table-row">
                <span>{person.name}</span>
                <span>{person.dept}</span>
                <span className={`status-pill ${person.status.toLowerCase()}`}>
                  {person.status}
                </span>
                <span>{person.join}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card panel">
          <div className="panel-header">
            <div>
              <h3>Department overview</h3>
              <p>Ownership and headcount summary.</p>
            </div>
            <button className="btn btn-ghost">View org chart</button>
          </div>
          <div className="list">
            {departments.map((dept) => (
              <div key={dept.name} className="list-item ghost">
                <div>
                  <strong>{dept.name}</strong>
                  <span>Head: {dept.head}</span>
                </div>
                <span className="pill">{dept.count} people</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
