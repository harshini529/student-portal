import StatCard from "../components/StatCard.jsx";
import { useStudent } from "../context/StudentContext.jsx";

function gradeOf(total) {
  if (total >= 90) return { g: "O", p: 10 };
  if (total >= 80) return { g: "A+", p: 9 };
  if (total >= 70) return { g: "A", p: 8 };
  if (total >= 60) return { g: "B+", p: 7 };
  if (total >= 50) return { g: "B", p: 6 };
  return { g: "C", p: 5 };
}

export default function Marks() {
  const { student } = useStudent();
  const rows = student.marks.map((m) => {
    const total = m.internal + m.assignment + m.mid + m.end;
    return { ...m, total, ...gradeOf(total) };
  });
  const gpa = (rows.reduce((s, r) => s + r.p, 0) / rows.length).toFixed(2);
  const best = rows.reduce((a, b) => (b.total > a.total ? b : a));

  return (
    <>
      <h2 className="page-title">Marks &amp; Grades</h2>
      <div className="grid stats">
        <StatCard icon="🎯" label="Semester GPA" value={gpa} note="Current semester" />
        <StatCard icon="🏆" label="Overall CGPA" value={student.cgpa} note="Out of 10" />
        <StatCard icon="⭐" label="Highest Scoring Subject" value={best.subject} note={`${best.total} / 100`} color="green" />
      </div>

      <div className="card table-wrap">
        <table>
          <thead>
            <tr>
              <th>Subject</th><th>Internal /20</th><th>Assignment /10</th>
              <th>Mid-term /20</th><th>End-sem /50</th><th>Total /100</th><th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.subject}>
                <td data-label="Subject">{r.subject}</td>
                <td data-label="Internal">{r.internal}</td>
                <td data-label="Assignment">{r.assignment}</td>
                <td data-label="Mid-term">{r.mid}</td>
                <td data-label="End-sem">{r.end}</td>
                <td data-label="Total"><strong>{r.total}</strong></td>
                <td data-label="Grade"><span className="badge blue">{r.g}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
