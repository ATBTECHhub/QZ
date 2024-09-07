import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TakerSignup from "./pages/TakerSignup";
import CreatorSignup from "./pages/CreatorSignup";
import ForgetPassword from "./pages/ForgetPassword";
import InstructorDashboard from "./pages/InstructorDashboard";
import CreateUser from "./components/InstructorDashboardPages/CreateUser";
import InstructorBase from "./components/InstructorDashboardPages/InstructorBase";
import ManageUser from "./components/InstructorDashboardPages/ManageUser";
import ManageGroup from "./components/InstructorDashboardPages/ManageGroup";
import CreateTest from "./components/InstructorDashboardPages/CreateTest";
import ManageTest from "./components/InstructorDashboardPages/ManageTest";
import QuestionBank from "./components/InstructorDashboardPages/QuestionBank";
import AdministerTest from "./components/InstructorDashboardPages/AdministerTest";
import MonitorTest from "./components/InstructorDashboardPages/MonitorTest";
import Analytics from "./components/InstructorDashboardPages/Analytics";
import Report from "./components/InstructorDashboardPages/Report";
import Results from "./components/InstructorDashboardPages/Results";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/test-taker-signup" element={<TakerSignup />} />
        <Route path="/test-creator-signup" element={<CreatorSignup />} />
        <Route path="/login/forgot-password" element={<ForgetPassword />} />
        <Route element={<InstructorDashboard />}>
          <Route path="/instructor-dashboard" element={<InstructorBase />} />
          <Route
            path="/instructor-dashboard/create-user"
            element={<CreateUser />}
          />
          <Route
            path="/instructor-dashboard/manage-user"
            element={<ManageUser />}
          />
          <Route
            path="/instructor-dashboard/manage-groups"
            element={<ManageGroup />}
          />
          <Route
            path="/instructor-dashboard/create-test"
            element={<CreateTest />}
          />
          <Route
            path="/instructor-dashboard/manage-test"
            element={<ManageTest />}
          />
          <Route
            path="/instructor-dashboard/questions"
            element={<QuestionBank />}
          />
          <Route
            path="/instructor-dashboard/administer-test"
            element={<AdministerTest />}
          />
          <Route
            path="/instructor-dashboard/monitor-test"
            element={<MonitorTest />}
          />
          <Route
            path="/instructor-dashboard/results"
            element={<Results />}
          />
          <Route
            path="/instructor-dashboard/reports"
            element={<Report />}
          />
          <Route
            path="/instructor-dashboard/analytics"
            element={<Analytics />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App
