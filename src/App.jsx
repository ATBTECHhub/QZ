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
import CreateGroup from "./components/InstructorDashboardPages/CreateGroup";
import CreateTest from "./components/InstructorDashboardPages/CreateTest";
import ManageTest from "./components/InstructorDashboardPages/ManageTest";
import QuestionBank from "./components/InstructorDashboardPages/QuestionBank";
import AdministerTest from "./components/InstructorDashboardPages/AdministerTest";
import MonitorTest from "./components/InstructorDashboardPages/MonitorTest";
import Analytics from "./components/InstructorDashboardPages/Analytics";
import Report from "./components/InstructorDashboardPages/Report";
import Results from "./components/InstructorDashboardPages/Results";
import ManageGroup from "./components/InstructorDashboardPages/ManageGroup";

import TakerDashboard from "./pages/TakerDashboard";
import TakerBase from "./components/TakerDashboard/TakerBase";
import AvailableTest from "./components/TakerDashboard/AvailableTest";
import OngoingTests from "./components/TakerDashboard/OngoingTests";
import CompletedTests from "./components/TakerDashboard/CompletedTests";
import TestResult from "./components/TakerDashboard/TestResult";
import Perfomance from "./components/TakerDashboard/Perfomance";
import ViewProfile from "./components/TakerDashboard/ViewProfile";
import EditProfile from "./components/TakerDashboard/EditProfile";
import AvailableTest2 from "./components/TakerDashboard/AvailableTest2";
import TestSubmitted from "./pages/TestSubmitted"


import ContinueTest from "./components/InstructorDashboardPages/ContinueTest";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/test-taker-signup" element={<TakerSignup />} />
        <Route path="/test-creator-signup" element={<CreatorSignup />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route
          path="/instructor-dashboard"
          element={
            <ProtectedRoute>
              <InstructorDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<InstructorBase />} />

          {/* Nestedroutes under create user page */}
          <Route path="create-user">
            <Route index element={<CreateUser />} />
            <Route path=":userId" element={<CreateUser />} />
          </Route>
          <Route path="manage-user" element={<ManageUser />} />

          {/* Nestedroutes under manage group page */}
          <Route path="groups">
            <Route index element={<CreateGroup />} />
            <Route path=":groupId" element={<CreateGroup />} />
            <Route path="manage-groups" element={<ManageGroup />} />
          </Route>

          {/* Nestedroutes under create test page */}
          <Route path="create-test">
            <Route index element={<CreateTest />} />
            <Route path="continue" element={<ContinueTest />} />
            <Route path=":testId" element={<CreateTest />} />
          </Route>
          <Route path="manage-test" element={<ManageTest />} />
          <Route path="questions" element={<QuestionBank />} />
          <Route path="administer-test" element={<AdministerTest />} />
          <Route path="monitor-test" element={<MonitorTest />} />
          <Route path="results" element={<Results />} />
          <Route path="reports" element={<Report />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
        {/* test taker routes */}
        <Route path="/taker-dashboard" element={<TakerDashboard />}>
          <Route index element={<TakerBase />} />
          <Route path="test" element={<AvailableTest />} />
          <Route path="available-test" element={<AvailableTest2 />} />

          <Route path="ongoing" element={<OngoingTests />} />
          <Route path="test-submitted" element={<TestSubmitted />} />
          <Route path="completed" element={<CompletedTests />} />
          <Route path="result" element={<TestResult />} />
          <Route path="performance-analysis" element={<Perfomance />} />
          <Route path="view-profile" element={<ViewProfile />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="submitted-test" element={<TestSubmitted />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;