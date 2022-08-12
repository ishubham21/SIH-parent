import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import Progress from "../Progress/Progress";
import Signup from "../Signup/Signup";
import style from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
