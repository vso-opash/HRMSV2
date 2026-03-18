import DashboardShell from "../components/DashboardShell";

const stats = [
  { title: "Payroll Status", value: "Draft", note: "March run" },
  { title: "Total Payout", value: "?18.6L", note: "Estimated" },
  { title: "Payslips", value: "0/40", note: "Not generated" },
  { title: "Compliance", value: "3", note: "Tasks pending" },
];

const checklist = [
  { label: "Lock attendance data", status: "Done" },
  { label: "Review LOP deductions", status: "In progress" },
  { label: "Validate statutory slabs", status: "Pending" },
  { label: "Generate payslips", status: "Pending" },
];

const components = [
  { name: "Basic Salary", value: "40-50% of CTC" },
  { name: "HRA", value: "40% non-metro / 50% metro" },
  { name: "PF + ESI", value: "Auto-calculated" },
  { name: "TDS", value: "Based on slabs" },
];

export default function PayrollPage() {
  return (
    <DashboardShell
      label="Payroll"
      title="Payroll run control"
      subtitle="Auto-run salary calculation with statutory compliance checks."
      actions={<button className="btn btn-ghost">Run payroll</button>}
    >
      <section className="card panel form-card">
        <div className="panel-header">
          <div>
            <h3>Initiate payroll run</h3>
            <p>Generate draft payroll with attendance and LOP data.</p>
          </div>
          <button className="btn btn-ghost">Preview summary</button>
        </div>
        <div className="form-grid">
          <div className="field">
            <label>Month</label>
            <select>
              <option>March</option>
              <option>February</option>
              <option>January</option>
            </select>
          </div>
          <div className="field">
            <label>Year</label>
            <input placeholder="2026" />
          </div>
          <div className="field">
            <label>Salary structure</label>
            <select>
              <option>Standard CTC Template</option>
              <option>Senior Engineers</option>
            </select>
          </div>
          <div className="field">
            <label>Notes</label>
            <textarea placeholder="Optional notes for finance" />
          </div>
        </div>
        <div className="form-actions">
          <button className="btn btn-ghost">Cancel</button>
          <button className="btn btn-primary">Generate draft</button>
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
              <h3>Run checklist</h3>
              <p>Critical steps before locking payroll.</p>
            </div>
            <button className="btn btn-ghost">View log</button>
          </div>
          <div className="list">
            {checklist.map((item) => (
              <div key={item.label} className="list-item ghost">
                <div>
                  <strong>{item.label}</strong>
                  <span>Status: {item.status}</span>
                </div>
                <span className="pill">{item.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card panel">
          <div className="panel-header">
            <div>
              <h3>Salary components</h3>
              <p>Reference structure for payroll templates.</p>
            </div>
            <button className="btn btn-ghost">Manage</button>
          </div>
          <div className="list">
            {components.map((item) => (
              <div key={item.name} className="list-item ghost">
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.value}</span>
                </div>
                <span className="pill">Standard</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
