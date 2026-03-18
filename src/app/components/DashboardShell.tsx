"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", path: "/" },
  { label: "Employee Master", path: "/employees" },
  { label: "Onboarding", path: "/onboarding" },
  { label: "Leave", path: "/leave" },
  { label: "Attendance", path: "/attendance" },
  { label: "Payroll", path: "/payroll" },
  { label: "Access Control", path: "/access" },
  { label: "Timesheets", path: "/timesheets" },
  { label: "Orders", path: "/orders" },
  { label: "Recruitment", path: "/recruitment" },
  { label: "Reports", path: "/reports" },
];

type DashboardShellProps = {
  label: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export default function DashboardShell({
  label,
  title,
  subtitle,
  actions,
  children,
}: DashboardShellProps) {
  const pathname = usePathname();

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-mark" />
          <div>
            <strong>Opash HRMS</strong>
            <p className="sidebar-subtitle">Operations Console</p>
          </div>
        </div>

        <div className="sidebar-section">
          <p className="sidebar-label">Workspace</p>
          <nav className="sidebar-nav">
            {navItems.map((item) => {
              const isActive =
                item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);

              return (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`nav-item ${isActive ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="sidebar-card">
          <p>Next milestone</p>
          <h3>Phase 1 release</h3>
          <span>28 days remaining</span>
          <button className="btn btn-primary">View roadmap</button>
        </div>
      </aside>

      <div className="main">
        <header className="topbar">
          <div>
            <p className="topbar-label">{label}</p>
            <h1>{title}</h1>
            {subtitle ? <p className="topbar-subtitle">{subtitle}</p> : null}
          </div>
          <div className="topbar-actions">
            <div className="search">
              <span>Search</span>
              <input placeholder="Employees, requests, orders" type="search" />
            </div>
            {actions}
            <div className="user-chip">
              <div className="user-avatar">HR</div>
              <div>
                <strong>HR Manager</strong>
                <span>hr@opash.in</span>
              </div>
            </div>
          </div>
        </header>

        <main className="content">{children}</main>
      </div>
    </div>
  );
}
