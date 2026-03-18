import DashboardShell from "../components/DashboardShell";

const stats = [
  { title: "Present Today", value: "34", note: "3 WFH, 2 late" },
  { title: "Regularisations", value: "5", note: "Awaiting approval" },
  { title: "Late Marks", value: "7", note: "This week" },
  { title: "LOP Days", value: "2", note: "March" },
];

const shifts = [
  { name: "General", time: "9:30 AM - 6:30 PM", grace: "15 mins" },
  { name: "Support", time: "11:00 AM - 8:00 PM", grace: "10 mins" },
  { name: "Night Ops", time: "6:00 PM - 2:00 AM", grace: "20 mins" },
];

const requests = [
  { name: "Akash Mehta", type: "WFH Regularisation", date: "Mar 16" },
  { name: "Priya Sharma", type: "Missed Punch", date: "Mar 15" },
  { name: "Nikita Rao", type: "WFH Regularisation", date: "Mar 14" },
];

export default function AttendancePage() {
  return (
    <DashboardShell
      label="Attendance"
      title="Attendance management"
      subtitle="Server-logged punches, shifts, and regularisation approvals."
      actions={<button className="btn btn-ghost">Lock month</button>}
    >
      <section className="card panel form-card">
        <div className="panel-header">
          <div>
            <h3>Regularisation request</h3>
            <p>Submit missed punches or WFH regularisation.</p>
          </div>
          <button className="btn btn-ghost">View policy</button>
        </div>
        <div className="form-grid">
          <div className="field">
            <label>Employee</label>
            <input placeholder="Employee name" />
          </div>
          <div className="field">
            <label>Request type</label>
            <select>
              <option>Missed Punch</option>
              <option>Work From Home</option>
            </select>
          </div>
          <div className="field">
            <label>Date</label>
            <input type="date" />
          </div>
          <div className="field">
            <label>Reason</label>
            <textarea placeholder="Reason for regularisation" />
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
              <h3>Shift configuration</h3>
              <p>Active shifts and grace periods.</p>
            </div>
            <button className="btn btn-ghost">Manage shifts</button>
          </div>
          <div className="list">
            {shifts.map((shift) => (
              <div key={shift.name} className="list-item ghost">
                <div>
                  <strong>{shift.name}</strong>
                  <span>{shift.time}</span>
                </div>
                <span className="pill">Grace {shift.grace}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card panel">
          <div className="panel-header">
            <div>
              <h3>Regularisation queue</h3>
              <p>Requests awaiting manager approval.</p>
            </div>
            <button className="btn btn-ghost">Review</button>
          </div>
          <div className="table">
            <div className="table-row table-head">
              <span>Employee</span>
              <span>Request</span>
              <span>Date</span>
              <span>Status</span>
            </div>
            {requests.map((req) => (
              <div key={req.name} className="table-row">
                <span>{req.name}</span>
                <span>{req.type}</span>
                <span>{req.date}</span>
                <span className="pill">Pending</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
