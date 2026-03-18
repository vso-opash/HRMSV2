import DashboardShell from "../components/DashboardShell";

const stats = [
  { title: "Pending Orders", value: "6", note: "2 need finance" },
  { title: "Spend This Month", value: "?1.2L", note: "Across 4 teams" },
  { title: "Approvals Due", value: "3", note: "Above ?10k" },
  { title: "Deliveries", value: "2", note: "Expected this week" },
];

const queue = [
  { title: "Laptop purchase", dept: "Engineering", status: "Finance" },
  { title: "Software licenses", dept: "Design", status: "Manager" },
  { title: "Office supplies", dept: "Operations", status: "Procurement" },
];

const categories = [
  { name: "IT Equipment", value: "?62k" },
  { name: "Software", value: "?38k" },
  { name: "Operations", value: "?20k" },
];

export default function OrdersPage() {
  return (
    <DashboardShell
      label="Internal Orders"
      title="Procurement workflow"
      subtitle="Track approvals, vendor updates, and delivery confirmations."
      actions={<button className="btn btn-ghost">New request</button>}
    >
      <section className="card panel form-card">
        <div className="panel-header">
          <div>
            <h3>Create purchase request</h3>
            <p>Raise an internal order with justification and budget.</p>
          </div>
          <button className="btn btn-ghost">Attach quote</button>
        </div>
        <div className="form-grid">
          <div className="field">
            <label>Item name</label>
            <input placeholder="Laptop" />
          </div>
          <div className="field">
            <label>Category</label>
            <select>
              <option>IT Equipment</option>
              <option>Software</option>
              <option>Office Supplies</option>
            </select>
          </div>
          <div className="field">
            <label>Quantity</label>
            <input placeholder="2" />
          </div>
          <div className="field">
            <label>Estimated cost</label>
            <input placeholder="?80,000" />
          </div>
          <div className="field">
            <label>Required date</label>
            <input type="date" />
          </div>
          <div className="field">
            <label>Justification</label>
            <textarea placeholder="Reason for purchase" />
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
              <h3>Approval queue</h3>
              <p>Orders awaiting sign-off.</p>
            </div>
            <button className="btn btn-ghost">Review</button>
          </div>
          <div className="table">
            <div className="table-row table-head">
              <span>Request</span>
              <span>Department</span>
              <span>Status</span>
              <span>Action</span>
            </div>
            {queue.map((item) => (
              <div key={item.title} className="table-row">
                <span>{item.title}</span>
                <span>{item.dept}</span>
                <span className="pill">{item.status}</span>
                <span>Open</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card panel">
          <div className="panel-header">
            <div>
              <h3>Category spend</h3>
              <p>Month-to-date spend by category.</p>
            </div>
            <button className="btn btn-ghost">View report</button>
          </div>
          <div className="list">
            {categories.map((item) => (
              <div key={item.name} className="list-item ghost">
                <div>
                  <strong>{item.name}</strong>
                  <span>Current spend</span>
                </div>
                <span className="pill">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
