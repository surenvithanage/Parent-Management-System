export const ROUTE_PATHS = {
  CLASS_DASHBOARD: "/classes-dashboard/",
  TUTION_CLASS: "/tution-class/",
  SUBJECTS: "/subjects/",
  ATTENDENCE: "/attendance/",
  STUDENTS: "/students/",
  EMPLOYEES: "/employees/",
  PARENTS: "/parents/",
  FEE: "/fee/",
  TIMETABLE: "/timetable/",
  STUDY_MATERIAL: "/study-material/",
  HOMEPAGE: "/"
};

export const ROUTE_DASHBOARD_TITLES = [
  { path: ROUTE_PATHS.HOMEPAGE, title: "Dashboard" },
  { path: ROUTE_PATHS.CLASS_DASHBOARD, title: "Class dashboard" },
  { path: ROUTE_PATHS.TUTION_CLASS, title: "Tution classes" },
  { path: ROUTE_PATHS.SUBJECTS, title: "Subjects" },
  { path: ROUTE_PATHS.ATTENDENCE, title: "Attendance" },
  { path: ROUTE_PATHS.STUDENTS, title: "Students" },
  { path: ROUTE_PATHS.EMPLOYEES, title: "Employees" },
  { path: ROUTE_PATHS.PARENTS, title: "Parents" },
  { path: ROUTE_PATHS.FEE, title: "Fees" },
  { path: ROUTE_PATHS.TIMETABLE, title: "Time Table" },
  { path: ROUTE_PATHS.STUDY_MATERIAL, title: "Study Materials" }
];
export const API_PATH = "http://localhost:5000/v1";
