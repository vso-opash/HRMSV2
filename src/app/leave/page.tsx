import DashboardShell from "../components/DashboardShell";

const stats = [
  { title: "Pending Approvals", value: "6", note: "3 managers" },
  { title: "Leave Balance Accuracy", value: "99%", note: "Auto-reconciled" },
  { title: "Upcoming Leaves", value: "9", note: "Next 14 days" },
  { title: "Conflicts", value: "2", note: "Team overlap" },
];

const requests = [
  { name: "Akash Mehta", type: "Casual", days: "3 days", status: "Pending" },
  { name: "Priya Sharma", type: "Sick", days: "1 day", status: "Approved" },
  { name: "Rohan Das", type: "Earned", days: "4 days", status: "Pending" },
];

const policies = [
  { label: "Casual Leave", value: "12 days / year" },
  { label: "Sick Leave", value: "12 days / year" },
  { label: "Earned Leave", value: "18 days / year" },
  { label: "Carry-forward", value: "April 1st automation" },
];

export default function LeavePage() {
  return (
    <DashboardShell
      label="Leave Management"
      title="Leave approvals & balances"
      subtitle="Audit-ready approvals and conflict detection across teams."
      actions={<button className="btn btn-ghost">Configure policies</button>}
    >
      <section className="card panel form-card">
        <div className="panel-header">
          <div>
            <h3>Apply leave</h3>
            <p>Submit leave requests with balance validation.</p>
          </div>
          <button className="btn btn-ghost">Save draft</button>
        </div>
        <div className="form-grid">
          <div className="field">
            <label>Employee</label>
            <input placeholder="Employee name" />
          </div>
          <div className="field">
            <label>Leave type</label>
            <select>
              <option>Casual Leave</option>
              <option>Sick Leave</option>
              <option>Earned Leave</option>
              <option>Maternity Leave</option>
              <option>Paternity Leave</option>
            </select>
          </div>
          <div className="field">
            <label>From date</label>
            <input type="date" />
          </div>
          <div className="field">
            <label>To date</label>
            <input type="date" />
          </div>
          <div className="field">
            <label>Reason</label>
            <textarea placeholder="Short reason" />
          </div>
          <div className="field">
            <label>Attachment</label>
            <input placeholder="Medical certificate link" />
          </div>
        </div>
        <div className="form-actions">
          <button className="btn btn-ghost">Cancel</button>
          <button className="btn btn-primary">Submit request</button>
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
              <h3>Leave requests</h3>
              <p>Manager approvals and HR escalations.</p>
            </div>
            <button className="btn btn-ghost">Review all</button>
          </div>
          <div className="table">
            <div className="table-row table-head">
              <span>Employee</span>
              <span>Type</span>
              <span>Duration</span>
              <span>Status</span>
            </div>
            {requests.map((req) => (
              <div key={req.name} className="table-row">
                <span>{req.name}</span>
                <span>{req.type}</span>
                <span>{req.days}</span>
                <span className="pill">{req.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card panel">
          <div className="panel-header">
            <div>
              <h3>Policy snapshot</h3>
              <p>Leave rules configured for FY 2026.</p>
            </div>
            <button className="btn btn-ghost">Update</button>
          </div>
          <div className="list">
            {policies.map((policy) => (
              <div key={policy.label} className="list-item ghost">
                <div>
                  <strong>{policy.label}</strong>
                  <span>{policy.value}</span>
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
