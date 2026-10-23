import { useState } from "react";
import { useStudent } from "../context/StudentContext.jsx";

const fields = [
  ["name", "Name"], ["id", "Student ID"], ["email", "Email"], ["phone", "Phone Number"],
  ["course", "Course"], ["branch", "Branch"], ["year", "Year"], ["semester", "Semester"],
];
const locked = ["id", "course", "branch", "year", "semester"]; // not editable

export default function Profile() {
  const { student: data, updateProfile } = useStudent();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(data);
  const [saved, setSaved] = useState(false);

  const save = (e) => {
    e.preventDefault();
    updateProfile({ name: draft.name, email: draft.email, phone: draft.phone });
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <>
      <h2 className="page-title">My Profile</h2>
      {saved && <div className="toast">Profile saved</div>}
      <div className="card profile">
        <div className="profile-photo">📷<small>Photo</small></div>
        <form className="profile-form" onSubmit={save}>
          {fields.map(([key, label]) => (
            <div className="field" key={key}>
              <label>{label}</label>
              {editing && !locked.includes(key) ? (
                <input value={draft[key]} onChange={(e) => setDraft({ ...draft, [key]: e.target.value })} />
              ) : (
                <div className="value">{data[key]}</div>
              )}
            </div>
          ))}
          <div className="actions">
            {editing ? (
              <>
                <button className="btn" type="submit">Save changes</button>
                <button className="btn secondary" type="button" onClick={() => { setDraft(data); setEditing(false); }}>Cancel</button>
              </>
            ) : (
              <button className="btn" type="button" onClick={() => { setDraft(data); setEditing(true); }}>Edit Profile</button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
