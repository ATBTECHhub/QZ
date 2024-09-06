import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TakerSignup from "./pages/TakerSignup";
import CreatorSignup from "./pages/CreatorSignup";
import ForgetPassword from "./pages/ForgetPassword";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/test-taker-signup" element={<TakerSignup />} />
        <Route path="/test-creator-signup" element={<CreatorSignup />} />
        <Route path="/login/forgot-password" element={<ForgetPassword/>} />
      </Routes>
    </>
  );
}

export default App
