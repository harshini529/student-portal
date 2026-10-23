import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudent } from "../context/StudentContext.jsx";
import { college, students } from "../data/mockData.js";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useStudent();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(id)) navigate("/dashboard");
    else setError("Student ID not found. Try one of the demo IDs below.");
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={handleLogin}>
        <div className="logo">🎓</div>
        <h2>{college.name} ({college.short})</h2>
        <p className="muted">Sign in to your student portal</p>
        <label>Student ID</label>
        <input value={id} onChange={(e) => { setId(e.target.value); setError(""); }} placeholder="e.g. STU2026" />
        <label>Password</label>
        <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Any password works in this prototype" />
        {error && <div className="error">{error}</div>}
        <button className="btn" type="submit">Login</button>
        <p className="forgot">Forgot Password?</p>

        <div className="demo-list">
          <p className="muted">Demo students (click to fill the ID):</p>
          {students.map((s) => (
            <button type="button" key={s.id} className="demo" onClick={() => { setId(s.id); setError(""); }}>
              <strong>{s.id}</strong> · {s.name}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}
