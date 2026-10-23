import { Link } from "react-router-dom";
import { useStudent } from "../context/StudentContext.jsx";
import { college } from "../data/mockData.js";

export default function Header({ onMenu }) {
  const { student } = useStudent();
  const initials = student.name.split(" ").map((n) => n[0]).slice(0, 2).join("");
  return (
    <header className="header">
      <button className="hamburger" onClick={onMenu} aria-label="Open menu">☰</button>
      <h1 className="header-title">{college.short} Student Portal</h1>
      <Link to="/profile" className="header-user">
        <span className="avatar small">{initials}</span>
        <span className="header-name">{student.name}</span>
      </Link>
    </header>
  );
}
