import StatCard from "../components/StatCard.jsx";
import { useStudent } from "../context/StudentContext.jsx";

export default function Attendance() {
  const { student } = useStudent();
  const rows = student.attendance.map((a) => ({ ...a, pct: Math.round((a.attended / a.total) * 100) }));
  const attended = rows.reduce((s, r) => s + r.attended, 0);
  const total = rows.reduce((s, r) => s + r.total, 0);
  const overall = Math.round((attended / total) * 100);

  const status = (p) => (p >= 85 ? ["Good", "green"] : p >= 75 ? ["Average", "orange"] : ["Low", "red"]);

  return (
    <>
      <h2 className="page-title">Attendance</h2>
      <div className="grid stats">
        <StatCard icon="📊" label="Overall Attendance" value={`${overall}%`} color={overall >= 75 ? "green" : "red"} />
        <StatCard icon="🏫" label="Classes Attended" value={`${attended} / ${total}`} />
      </div>

      <div className="card table-wrap">
        <table>
          <thead>
            <tr><th>Subject</th><th>Attended</th><th>Total</th><th>Percentage</th><th>Status</th></tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const [label, color] = status(r.pct);
              return (
                <tr key={r.subject}>
                  <td data-label="Subject">{r.subject}</td>
                  <td data-label="Attended">{r.attended}</td>
                  <td data-label="Total">{r.total}</td>
                  <td data-label="Percentage">
                    <div className="progress"><div className={`bar ${color}`} style={{ width: `${r.pct}%` }} /></div>
                    <small>{r.pct}%</small>
                  </td>
                  <td data-label="Status"><span className={`badge ${color}`}>{label}</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="muted">Minimum required attendance is 75%.</p>
    </>
  );
}
