export const college = {
  name: "Anil Neerukonda Institute of Technology and Sciences",
  short: "ANITS",
};

const subjects = ["Data Structures", "DBMS", "Operating Systems", "Web Development", "Computer Networks"];
const classTotals = [42, 40, 40, 38, 40]; // total classes held per subject

// attended = classes attended in each of the 5 subjects (same order as `subjects`)
const makeAttendance = (attended) =>
  subjects.map((subject, i) => ({ subject, attended: attended[i], total: classTotals[i] }));

// rows = [internal /20, assignment /10, mid-term /20, end-sem /50] for each subject
const makeMarks = (rows) =>
  subjects.map((subject, i) => ({
    subject, internal: rows[i][0], assignment: rows[i][1], mid: rows[i][2], end: rows[i][3],
  }));

const baseAssignments = [
  { id: 1, subject: "Data Structures", title: "Binary Tree Traversals", due: "2026-11-02" },
  { id: 2, subject: "DBMS", title: "ER Diagram for Library System", due: "2026-10-28" },
  { id: 3, subject: "Operating Systems", title: "CPU Scheduling Report", due: "2026-10-15" },
  { id: 4, subject: "Web Development", title: "Responsive Portfolio Page", due: "2026-10-10" },
  { id: 5, subject: "Computer Networks", title: "Subnetting Worksheet", due: "2026-10-12" },
  { id: 6, subject: "Web Development", title: "React To-Do App", due: "2026-11-08" },
  { id: 7, subject: "DBMS", title: "SQL Joins Practice", due: "2026-10-05" },
];
// statuses = one status per assignment above (Pending / Submitted / Overdue)
const makeAssignments = (statuses) => baseAssignments.map((a, i) => ({ ...a, status: statuses[i] }));

export const students = [
  {
    name: "Harshini Thella", id: "STU2026", email: "harshini.thella@anits.edu.in", phone: "+91 98765 43210",
    course: "B.Tech", branch: "Computer Science", year: "3rd Year", semester: "5th Semester", cgpa: 8.4,
    attendance: makeAttendance([38, 35, 29, 36, 27]),
    marks: makeMarks([[18, 9, 17, 44], [17, 8, 16, 41], [15, 7, 14, 36], [19, 10, 18, 46], [14, 7, 13, 33]]),
    assignments: makeAssignments(["Pending", "Pending", "Overdue", "Submitted", "Overdue", "Pending", "Submitted"]),
  },
  {
    name: "Ravi Teja Kommu", id: "STU2027", email: "ravi.kommu@anits.edu.in", phone: "+91 98480 12345",
    course: "B.Tech", branch: "Computer Science", year: "3rd Year", semester: "5th Semester", cgpa: 7.8,
    attendance: makeAttendance([36, 33, 34, 30, 31]),
    marks: makeMarks([[16, 8, 15, 40], [15, 7, 14, 38], [16, 8, 15, 39], [14, 8, 13, 35], [15, 7, 14, 37]]),
    assignments: makeAssignments(["Submitted", "Pending", "Submitted", "Submitted", "Pending", "Pending", "Submitted"]),
  },
  {
    name: "Sravani Pydi", id: "STU2028", email: "sravani.pydi@anits.edu.in", phone: "+91 99591 22334",
    course: "B.Tech", branch: "Information Technology", year: "3rd Year", semester: "5th Semester", cgpa: 9.1,
    attendance: makeAttendance([41, 39, 38, 37, 39]),
    marks: makeMarks([[19, 10, 19, 48], [19, 9, 18, 46], [18, 10, 18, 45], [20, 10, 19, 47], [18, 9, 17, 44]]),
    assignments: makeAssignments(["Submitted", "Submitted", "Submitted", "Submitted", "Submitted", "Pending", "Submitted"]),
  },
  {
    name: "Karthik Varma Penmetsa", id: "STU2029", email: "karthik.varma@anits.edu.in", phone: "+91 90000 45678",
    course: "B.Tech", branch: "Computer Science", year: "3rd Year", semester: "5th Semester", cgpa: 6.9,
    attendance: makeAttendance([30, 28, 27, 29, 26]),
    marks: makeMarks([[13, 6, 12, 32], [12, 6, 11, 30], [12, 5, 11, 29], [14, 7, 13, 34], [11, 5, 10, 27]]),
    assignments: makeAssignments(["Overdue", "Pending", "Overdue", "Submitted", "Overdue", "Pending", "Overdue"]),
  },
  {
    name: "Anusha Gandham", id: "STU2030", email: "anusha.gandham@anits.edu.in", phone: "+91 98850 77889",
    course: "B.Tech", branch: "Information Technology", year: "3rd Year", semester: "5th Semester", cgpa: 8.0,
    attendance: makeAttendance([37, 34, 33, 35, 32]),
    marks: makeMarks([[17, 8, 16, 40], [16, 8, 15, 39], [15, 8, 15, 38], [17, 9, 16, 41], [15, 8, 14, 37]]),
    assignments: makeAssignments(["Pending", "Submitted", "Submitted", "Submitted", "Overdue", "Pending", "Submitted"]),
  },
  {
    name: "Mohan Krishna Bolla", id: "STU2031", email: "mohan.bolla@anits.edu.in", phone: "+91 97010 33445",
    course: "B.Tech", branch: "Computer Science", year: "3rd Year", semester: "5th Semester", cgpa: 7.4,
    attendance: makeAttendance([35, 31, 32, 33, 29]),
    marks: makeMarks([[15, 7, 14, 36], [14, 7, 14, 35], [15, 7, 13, 34], [16, 8, 15, 38], [13, 6, 12, 33]]),
    assignments: makeAssignments(["Pending", "Submitted", "Overdue", "Submitted", "Pending", "Pending", "Submitted"]),
  },
];

export const exams = [
  { subject: "Data Structures", date: "2026-11-10" },
  { subject: "DBMS", date: "2026-11-12" },
  { subject: "Operating Systems", date: "2026-11-14" },
];

// The timetable and notices are common for the whole class
export const timetable = {
  Monday: [
    { time: "9:00 - 10:00", subject: "Data Structures", faculty: "Dr. R. Sharma", room: "A-101" },
    { time: "10:00 - 11:00", subject: "DBMS", faculty: "Prof. S. Rao", room: "A-102" },
    { time: "11:15 - 12:15", subject: "Operating Systems", faculty: "Dr. K. Reddy", room: "B-201" },
    { time: "2:00 - 4:00", subject: "Web Development Lab", faculty: "Ms. P. Devi", room: "Lab 3" },
  ],
  Tuesday: [
    { time: "9:00 - 10:00", subject: "Computer Networks", faculty: "Prof. M. Iyer", room: "B-202" },
    { time: "10:00 - 11:00", subject: "Data Structures", faculty: "Dr. R. Sharma", room: "A-101" },
    { time: "11:15 - 12:15", subject: "Web Development", faculty: "Ms. P. Devi", room: "A-103" },
    { time: "2:00 - 4:00", subject: "DBMS Lab", faculty: "Prof. S. Rao", room: "Lab 2" },
  ],
  Wednesday: [
    { time: "9:00 - 10:00", subject: "Operating Systems", faculty: "Dr. K. Reddy", room: "B-201" },
    { time: "10:00 - 11:00", subject: "Computer Networks", faculty: "Prof. M. Iyer", room: "B-202" },
    { time: "11:15 - 12:15", subject: "DBMS", faculty: "Prof. S. Rao", room: "A-102" },
    { time: "2:00 - 3:00", subject: "Placement Training", faculty: "T&P Cell", room: "Seminar Hall" },
  ],
  Thursday: [
    { time: "9:00 - 10:00", subject: "Web Development", faculty: "Ms. P. Devi", room: "A-103" },
    { time: "10:00 - 11:00", subject: "Data Structures", faculty: "Dr. R. Sharma", room: "A-101" },
    { time: "11:15 - 12:15", subject: "Computer Networks", faculty: "Prof. M. Iyer", room: "B-202" },
    { time: "2:00 - 4:00", subject: "Operating Systems Lab", faculty: "Dr. K. Reddy", room: "Lab 1" },
  ],
  Friday: [
    { time: "9:00 - 10:00", subject: "DBMS", faculty: "Prof. S. Rao", room: "A-102" },
    { time: "10:00 - 11:00", subject: "Operating Systems", faculty: "Dr. K. Reddy", room: "B-201" },
    { time: "11:15 - 12:15", subject: "Data Structures", faculty: "Dr. R. Sharma", room: "A-101" },
    { time: "2:00 - 3:00", subject: "Mentoring Hour", faculty: "Dr. R. Sharma", room: "A-101" },
  ],
};

export const notices = [
  { id: 1, title: "Internal Examination Schedule", date: "2026-10-20", category: "Exams",
    summary: "Internal exams begin on 10 November.",
    details: "Internal examinations for 5th semester will begin on 10 November 2026. Hall tickets will be available from the exam section a week before. Carry your college ID card to every exam. Please report 15 minutes early." },
  { id: 2, title: "Diwali Holiday Announcement", date: "2026-10-18", category: "Holiday",
    summary: "College closed from 8 to 10 November.",
    details: "The college will remain closed from 8 November to 10 November 2026 for the Diwali holidays. Regular classes resume on 11 November. Hostel students should inform the warden about their travel plans." },
  { id: 3, title: "Assignment Submission Reminder", date: "2026-10-16", category: "Academic",
    summary: "Overdue assignments must be submitted this week.",
    details: "Students with overdue assignments in Operating Systems and Computer Networks must submit them to the respective faculty before Friday. Late submissions after this date may not be evaluated." },
  { id: 4, title: "Annual Tech Fest: Techvista 2026", date: "2026-10-12", category: "Event",
    summary: "Registrations are open for coding and robotics events.",
    details: "Techvista 2026 will be held on 28 and 29 November. Events include a hackathon, coding contest, robotics challenge and project expo. Register through the student council before 15 November." },
  { id: 5, title: "Placement Training: Aptitude Batch", date: "2026-10-09", category: "Placement",
    summary: "Aptitude training starts every Wednesday at 2 PM.",
    details: "The Training & Placement cell is starting an aptitude and reasoning batch for 3rd-year students. Sessions run every Wednesday at 2:00 PM in the Seminar Hall. Attendance is mandatory for placement eligibility." },
];
