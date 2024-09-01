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
        <Route path="/takersignup" element={<TakerSignup />} />
        <Route path="/CreatorSignup" element={<CreatorSignup />} />
        <Route path="/login/forgetpassword" element={<ForgetPassword/>} />
      </Routes>
    </>
  );
}

export default App
