import { Link } from "react-router-dom";
import StatCard from "../components/StatCard.jsx";
import NoticeCard from "../components/NoticeCard.jsx";
import { exams, notices } from "../data/mockData.js";
import { useStudent, loadAssignments } from "../context/StudentContext.jsx";

const quick = [
  { to: "/attendance", icon: "📊", label: "Attendance" },
  { to: "/marks", icon: "📝", label: "Marks" },
  { to: "/assignments", icon: "📚", label: "Assignments" },
  { to: "/timetable", icon: "📅", label: "Timetable" },
  { to: "/notices", icon: "📢", label: "Notices" },
];

export default function Dashboard() {
  const { student } = useStudent();
  const attendance = student.attendance;
  const assignments = loadAssignments(student);
  const initials = student.name.split(" ").map((n) => n[0]).slice(0, 2).join("");
  const attended = attendance.reduce((s, a) => s + a.attended, 0);
  const total = attendance.reduce((s, a) => s + a.total, 0);
  const overall = Math.round((attended / total) * 100);
  const pending = assignments.filter((a) => a.status !== "Submitted").length;

  return (
    <>
      <div className="card welcome">
        <div className="avatar">{initials}</div>
        <div>
          <h2>Welcome back, {student.name.split(" ")[0]}!</h2>
          <p>{student.id} · {student.course} {student.branch} · {student.year} · {student.semester}</p>
        </div>
      </div>

      <div className="grid stats">
        <StatCard icon="✅" label="Attendance" value={`${overall}%`} note="Overall" color={overall >= 75 ? "green" : "orange"} />
        <StatCard icon="🏆" label="CGPA" value={student.cgpa} note="Out of 10" />
        <StatCard icon="📚" label="Pending Assignments" value={pending} note="Including overdue" color="orange" />
        <StatCard icon="🗓️" label="Upcoming Exams" value={exams.length} note={`Next: ${exams[0].date}`} />
      </div>

      <h2 className="section-title">Quick actions</h2>
      <div className="grid quick">
        {quick.map((q) => (
          <Link key={q.to} to={q.to} className="card quick-card">
            <span className="quick-icon">{q.icon}</span>
            {q.label}
          </Link>
        ))}
      </div>

      <div className="grid two">
        <div>
          <h2 className="section-title">Upcoming exams</h2>
          <div className="card">
            {exams.map((e) => (
              <div className="row" key={e.subject}>
                <span>{e.subject}</span>
                <strong>{e.date}</strong>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="section-title">Recent notices</h2>
          {notices.slice(0, 3).map((n) => (
            <NoticeCard key={n.id} notice={n} compact />
          ))}
        </div>
      </div>
    </>
  );
}
