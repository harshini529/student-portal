import { useState } from "react";
import NoticeCard from "../components/NoticeCard.jsx";
import { notices } from "../data/mockData.js";

export default function Notices() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <h2 className="page-title">Notice Board</h2>
      <div className="grid notices">
        {notices.map((n) => (
          <NoticeCard key={n.id} notice={n} onClick={() => setSelected(n)} />
        ))}
      </div>

      {selected && (
        <div className="modal-bg" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="notice-top">
              <span className={`tag ${selected.category.toLowerCase()}`}>{selected.category}</span>
              <span className="muted">{selected.date}</span>
            </div>
            <h2>{selected.title}</h2>
            <p>{selected.details}</p>
            <button className="btn" onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
