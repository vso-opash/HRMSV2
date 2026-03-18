import DashboardShell from "../components/DashboardShell";

const stats = [
  { title: "Compliance Reports", value: "4", note: "PF, ESI, PT" },
  { title: "People Analytics", value: "6", note: "Attrition, headcount" },
  { title: "Finance Exports", value: "3", note: "Payroll, orders" },
  { title: "Scheduled", value: "2", note: "Monthly auto-send" },
];

const packs = [
  { name: "Monthly payroll summary", format: "PDF + CSV" },
  { name: "Attendance audit trail", format: "CSV" },
  { name: "Recruitment funnel", format: "PDF" },
];

const schedules = [
  { name: "Form 16 generation", timing: "Quarterly" },
  { name: "HR dashboard pack", timing: "Every Monday" },
];

export default function ReportsPage() {
  return (
    <DashboardShell
      label="Reports"
      title="Reports & exports"
      subtitle="Download audit-ready outputs and automate recurring reports."
      actions={<button className="btn btn-ghost">Create schedule</button>}
    >
      <section className="card panel form-card">
        <div className="panel-header">
          <div>
            <h3>Generate report</h3>
            <p>Select report type, period, and export format.</p>
          </div>
          <button className="btn btn-ghost">Save preset</button>
        </div>
        <div className="form-grid">
          <div className="field">
            <label>Report type</label>
            <select>
              <option>Payroll summary</option>
              <option>Attendance report</option>
              <option>Leave utilisation</option>
              <option>Recruitment funnel</option>
            </select>
          </div>
          <div className="field">
            <label>Period</label>
            <select>
              <option>March 2026</option>
              <option>February 2026</option>
              <option>January 2026</option>
            </select>
          </div>
          <div className="field">
            <label>Format</label>
            <select>
              <option>PDF</option>
              <option>CSV</option>
              <option>PDF + CSV</option>
            </select>
          </div>
          <div className="field">
            <label>Notes</label>
            <textarea placeholder="Optional notes" />
          </div>
        </div>
        <div className="form-actions">
          <button className="btn btn-ghost">Cancel</button>
          <button className="btn btn-primary">Generate report</button>
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
              <h3>Download packs</h3>
              <p>Quick exports for compliance and leadership.</p>
            </div>
            <button className="btn btn-ghost">Export all</button>
          </div>
          <div className="list">
            {packs.map((pack) => (
              <div key={pack.name} className="list-item">
                <div>
                  <strong>{pack.name}</strong>
                  <span>{pack.format}</span>
                </div>
                <button className="btn btn-primary">Download</button>
              </div>
            ))}
          </div>
        </div>

        <div className="card panel">
          <div className="panel-header">
            <div>
              <h3>Scheduled reports</h3>
              <p>Automated sends to HR and Finance.</p>
            </div>
            <button className="btn btn-ghost">Manage</button>
          </div>
          <div className="list">
            {schedules.map((schedule) => (
              <div key={schedule.name} className="list-item ghost">
                <div>
                  <strong>{schedule.name}</strong>
                  <span>{schedule.timing}</span>
                </div>
                <span className="pill">Active</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
