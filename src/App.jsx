import { useState } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Attendance from "./pages/Attendance.jsx";
import Marks from "./pages/Marks.jsx";
import Assignments from "./pages/Assignments.jsx";
import Timetable from "./pages/Timetable.jsx";
import Notices from "./pages/Notices.jsx";
import Profile from "./pages/Profile.jsx";
import { useStudent } from "./context/StudentContext.jsx";

// Shared layout: sidebar + header + the current page
function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { student } = useStudent();
  if (!student) return <Navigate to="/" replace />; // not logged in
  return (
    <div className="app">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && <div className="backdrop" onClick={() => setMenuOpen(false)} />}
      <div className="main">
        <Header onMenu={() => setMenuOpen(true)} />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/marks" element={<Marks />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
