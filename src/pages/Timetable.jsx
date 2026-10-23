import { timetable } from "../data/mockData.js";

export default function Timetable() {
  return (
    <>
      <h2 className="page-title">Weekly Timetable</h2>
      <div className="grid timetable">
        {Object.entries(timetable).map(([day, slots]) => (
          <div className="day" key={day}>
            <h3 className="day-head">{day}</h3>
            {slots.map((s) => (
              <div className="card slot" key={s.time}>
                <div className="slot-time">{s.time}</div>
                <strong>{s.subject}</strong>
                <div className="muted">{s.faculty}</div>
                <div className="muted">📍 {s.room}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
