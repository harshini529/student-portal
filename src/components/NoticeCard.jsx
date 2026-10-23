export default function NoticeCard({ notice, onClick, compact }) {
  return (
    <div className="card notice" onClick={onClick} role="button" tabIndex={0}
         onKeyDown={(e) => e.key === "Enter" && onClick && onClick()}>
      <div className="notice-top">
        <span className={`tag ${notice.category.toLowerCase()}`}>{notice.category}</span>
        <span className="muted">{notice.date}</span>
      </div>
      <h3>{notice.title}</h3>
      {!compact && <p className="muted">{notice.summary}</p>}
    </div>
  );
}
