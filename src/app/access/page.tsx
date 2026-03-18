import DashboardShell from "../components/DashboardShell";

const roles = [
  { role: "Super Admin", scope: "Full access", users: "2" },
  { role: "HR Manager", scope: "HR modules", users: "2" },
  { role: "Manager / TL", scope: "Team approvals", users: "9" },
  { role: "Finance", scope: "Payroll & Orders", users: "2" },
];

const logs = [
  { action: "Updated employee record", actor: "HR Manager", time: "2 mins ago" },
  { action: "Approved leave", actor: "Manager TL", time: "18 mins ago" },
  { action: "Generated payslip", actor: "Finance", time: "1 hour ago" },
];

export default function AccessPage() {
  return (
    <DashboardShell
      label="Access Management"
      title="Roles, permissions, and audit trail"
      subtitle="Server-side RBAC and immutable logs across every module."
      actions={<button className="btn btn-ghost">Manage roles</button>}
    >
      <section className="split">
        <div className="card panel">
          <div className="panel-header">
            <div>
              <h3>Role matrix</h3>
              <p>Default permissions by role.</p>
            </div>
            <button className="btn btn-ghost">Edit matrix</button>
          </div>
          <div className="table">
            <div className="table-row table-head">
              <span>Role</span>
              <span>Scope</span>
              <span>Users</span>
              <span>Status</span>
            </div>
            {roles.map((role) => (
              <div key={role.role} className="table-row">
                <span>{role.role}</span>
                <span>{role.scope}</span>
                <span>{role.users}</span>
                <span className="pill">Active</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card panel">
          <div className="panel-header">
            <div>
              <h3>Audit log</h3>
              <p>Recent actions captured across modules.</p>
            </div>
            <button className="btn btn-ghost">View logs</button>
          </div>
          <div className="list">
            {logs.map((log) => (
              <div key={log.action} className="list-item ghost">
                <div>
                  <strong>{log.action}</strong>
                  <span>{log.actor}</span>
                </div>
                <span className="pill">{log.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
