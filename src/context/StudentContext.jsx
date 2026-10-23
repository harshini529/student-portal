import { createContext, useContext, useState } from "react";
import { students } from "../data/mockData.js";

const StudentContext = createContext(null);

// Assignments: use saved statuses (from localStorage) if the student already submitted something
export function loadAssignments(student) {
  const saved = localStorage.getItem(`assignments-${student.id}`);
  return saved ? JSON.parse(saved) : student.assignments;
}

export function StudentProvider({ children }) {
  const [currentId, setCurrentId] = useState(() => localStorage.getItem("currentStudent"));
  const [edits, setEdits] = useState(() => JSON.parse(localStorage.getItem("profileEdits") || "{}"));

  const base = students.find((s) => s.id === currentId);
  const student = base ? { ...base, ...edits[base.id] } : null;

  // Returns true if the ID exists. (Prototype: the password is not checked.)
  const login = (inputId) => {
    const found = students.find((s) => s.id.toLowerCase() === inputId.trim().toLowerCase());
    if (!found) return false;
    localStorage.setItem("currentStudent", found.id);
    setCurrentId(found.id);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("currentStudent");
    setCurrentId(null);
  };

  const updateProfile = (changes) => {
    const next = { ...edits, [currentId]: { ...edits[currentId], ...changes } };
    setEdits(next);
    localStorage.setItem("profileEdits", JSON.stringify(next));
  };

  return (
    <StudentContext.Provider value={{ student, login, logout, updateProfile }}>
      {children}
    </StudentContext.Provider>
  );
}

export const useStudent = () => useContext(StudentContext);
