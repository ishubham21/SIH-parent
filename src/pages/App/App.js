import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import Progress from "../Progress/Progress";
import Signup from "../Signup/Signup";
import About from "../About/About";
import style from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SharedRoute from "../SharedRoute/SharedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/" element={<SharedRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="progress" element={<Progress />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
