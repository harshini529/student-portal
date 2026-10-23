import { useState, useEffect } from "react";
import { useStudent, loadAssignments } from "../context/StudentContext.jsx";

const filters = ["All", "Pending", "Submitted", "Overdue"];
const colors = { Pending: "orange", Submitted: "green", Overdue: "red" };

export default function Assignments() {
  const { student } = useStudent();
  const [list, setList] = useState(() => loadAssignments(student));
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem(`assignments-${student.id}`, JSON.stringify(list));
  }, [list, student.id]);

  const submit = (id) => setList(list.map((a) => (a.id === id ? { ...a, status: "Submitted" } : a)));
  const shown = filter === "All" ? list : list.filter((a) => a.status === filter);

  return (
    <>
      <h2 className="page-title">Assignments</h2>
      <div className="filters">
        {filters.map((f) => (
          <button key={f} className={`chip ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>
            {f} ({f === "All" ? list.length : list.filter((a) => a.status === f).length})
          </button>
        ))}
      </div>

      <div className="grid assignments">
        {shown.map((a) => (
          <div className="card assignment" key={a.id}>
            <div className="notice-top">
              <span className="muted">{a.subject}</span>
              <span className={`badge ${colors[a.status]}`}>{a.status}</span>
            </div>
            <h3>{a.title}</h3>
            <p className="muted">Due: {a.due}</p>
            {a.status === "Submitted" ? (
              <button className="btn secondary" disabled>Submitted ✓</button>
            ) : (
              <button className="btn" onClick={() => submit(a.id)}>Submit</button>
            )}
          </div>
        ))}
        {shown.length === 0 && <p className="muted">No assignments in this category.</p>}
      </div>
    </>
  );
}
