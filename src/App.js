import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ManageCourseDetails from "./pages/ManageCourseDetails";
import EditStudentDetails from "./pages/EditStudentDetails";
import EditTeacherDetails from "./pages/EditTeacherDetails";
import CourseDetails1 from "./pages/CourseDetails1";
import CourseDetails from "./pages/CourseDetails";
import DashboardTeacher from "./pages/DashboardTeacher";
import DashboardStudent from "./pages/Student Dashboard Page/DashboardStudent";
import AddCourse from "./pages/AddCourse";
import RegistrationStudent from "./pages/Student Registration Page/RegistrationStudent";
import RegistrationTeacher from "./pages/RegistrationTeacher";
import Welcome from "./pages/Welcome Page/Welcome";
import LoginTeacher from "./pages/Teacher Login Page/LoginTeacher";
import LoginStudent from "./pages/Student Login Page/LoginStudent";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/edit-student-details":
        title = "";
        metaDescription = "";
        break;
      case "/edit-teacher-details":
        title = "";
        metaDescription = "";
        break;
      case "/course-details":
        title = "";
        metaDescription = "";
        break;
      case "/course-details1":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-teacher":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-student":
        title = "";
        metaDescription = "";
        break;
      case "/add-course":
        title = "";
        metaDescription = "";
        break;
      case "/registration-student":
        title = "";
        metaDescription = "";
        break;
      case "/registration-teacher":
        title = "";
        metaDescription = "";
        break;
      case "/welcome":
        title = "";
        metaDescription = "";
        break;
      case "/login-teacher":
        title = "";
        metaDescription = "";
        break;
      case "/login-student":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/edit-student-details" element={<EditStudentDetails />} />
      <Route path="/edit-teacher-details" element={<EditTeacherDetails />} />
      <Route path="/course-details" element={<CourseDetails1 />} />
      <Route path="/course-details1" element={<CourseDetails />} />
      <Route path="/dashboard-teacher" element={<DashboardTeacher />} />
      <Route path="/dashboard-student" element={<DashboardStudent />} />
      <Route path="/add-course" element={<AddCourse />} />
      <Route path="/registration-student" element={<RegistrationStudent />} />
      <Route path="/registration-teacher" element={<RegistrationTeacher />} />
      <Route path="/manage-course" element={<ManageCourseDetails />} />
      <Route path="/login-teacher" element={<LoginTeacher />} />
      <Route path="/login-student" element={<LoginStudent />} />
    </Routes>
  );
}
export default App;
