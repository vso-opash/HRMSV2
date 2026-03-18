import DashboardShell from "../components/DashboardShell";

const stats = [
  { title: "Open Requisitions", value: "5", note: "Engineering, QA" },
  { title: "Active Candidates", value: "34", note: "In pipeline" },
  { title: "Interviews", value: "7", note: "This week" },
  { title: "Offers", value: "2", note: "Pending decision" },
];

const pipeline = [
  { stage: "Applied", count: "12" },
  { stage: "Screening", count: "8" },
  { stage: "Interview", count: "9" },
  { stage: "HR Discussion", count: "3" },
  { stage: "Offer", count: "2" },
];

const requisitions = [
  { role: "Frontend Engineer", dept: "Engineering", status: "Approved" },
  { role: "QA Analyst", dept: "QA", status: "Draft" },
  { role: "Project Manager", dept: "Delivery", status: "Interviewing" },
];

export default function RecruitmentPage() {
  return (
    <DashboardShell
      label="Recruitment"
      title="Hiring pipeline"
      subtitle="Track requisitions, candidate stages, and offer outcomes."
      actions={<button className="btn btn-ghost">New requisition</button>}
    >
      <section className="card panel form-card">
        <div className="panel-header">
          <div>
            <h3>Raise job requisition</h3>
            <p>Create a new hiring request for approval.</p>
          </div>
          <button className="btn btn-ghost">Use template</button>
        </div>
        <div className="form-grid">
          <div className="field">
            <label>Role title</label>
            <input placeholder="Frontend Engineer" />
          </div>
          <div className="field">
            <label>Department</label>
            <select>
              <option>Engineering</option>
              <option>QA</option>
              <option>Design</option>
            </select>
          </div>
          <div className="field">
            <label>Positions</label>
            <input placeholder="2" />
          </div>
          <div className="field">
            <label>Experience range</label>
            <input placeholder="3-5 years" />
          </div>
          <div className="field">
            <label>Budget range</label>
            <input placeholder="?6-8 LPA" />
          </div>
          <div className="field">
            <label>Target joining date</label>
            <input type="date" />
          </div>
          <div className="field">
            <label>Required skills</label>
            <textarea placeholder="React, Node.js, REST APIs" />
          </div>
        </div>
        <div className="form-actions">
          <button className="btn btn-ghost">Save draft</button>
          <button className="btn btn-primary">Submit for approval</button>
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
              <h3>Pipeline stages</h3>
              <p>Candidate distribution across stages.</p>
            </div>
            <button className="btn btn-ghost">View pipeline</button>
          </div>
          <div className="mini-grid">
            {pipeline.map((stage) => (
              <div key={stage.stage} className="card mini-card">
                <strong>{stage.stage}</strong>
                <span>{stage.count} candidates</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card panel">
          <div className="panel-header">
            <div>
              <h3>Job requisitions</h3>
              <p>Approval status and active hiring needs.</p>
            </div>
            <button className="btn btn-ghost">Manage</button>
          </div>
          <div className="table">
            <div className="table-row table-head">
              <span>Role</span>
              <span>Department</span>
              <span>Status</span>
              <span>Action</span>
            </div>
            {requisitions.map((req) => (
              <div key={req.role} className="table-row">
                <span>{req.role}</span>
                <span>{req.dept}</span>
                <span className="pill">{req.status}</span>
                <span>View</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
