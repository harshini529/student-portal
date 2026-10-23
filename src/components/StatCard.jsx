export default function StatCard({ icon, label, value, note, color = "blue" }) {
  return (
    <div className={`card stat ${color}`}>
      <div className="stat-icon">{icon}</div>
      <div>
        <div className="stat-label">{label}</div>
        <div className="stat-value">{value}</div>
        {note && <div className="stat-note">{note}</div>}
      </div>
    </div>
  );
}
