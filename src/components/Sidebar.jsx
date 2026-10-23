import { NavLink, useNavigate } from "react-router-dom";
import { useStudent } from "../context/StudentContext.jsx";
import { college } from "../data/mockData.js";

const links = [
  { to: "/dashboard", icon: "🏠", label: "Dashboard" },
  { to: "/attendance", icon: "📊", label: "Attendance" },
  { to: "/marks", icon: "📝", label: "Marks" },
  { to: "/assignments", icon: "📚", label: "Assignments" },
  { to: "/timetable", icon: "📅", label: "Timetable" },
  { to: "/notices", icon: "📢", label: "Notices" },
  { to: "/profile", icon: "👤", label: "Profile" },
];

export default function Sidebar({ open, onClose }) {
  const navigate = useNavigate();
  const { logout: signOut } = useStudent();
  const logout = () => {
    signOut();
    onClose();
    navigate("/");
  };
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="brand">🎓 <div>{college.short}<small>{college.name}</small></div></div>
      <nav>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} onClick={onClose} className="nav-link">
            <span>{l.icon}</span> {l.label}
          </NavLink>
        ))}
        <button className="nav-link logout" onClick={logout}>
          <span>🚪</span> Logout
        </button>
      </nav>
    </aside>
  );
}
