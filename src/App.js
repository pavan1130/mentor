// import React from "react";
// import WorkWithUs from "./page/WorkWithUs";
// const App = () => {
//   return (
//     <div>
//       <WorkWithUs />
//     </div>
//   );
// };

// export default App;

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./helps/Navbar";
// import jobconselling from "./page/CareerCounseling";
// import WorkWithUs from "./page/WorkWithUs";
import CareerCounseling from "./page/CareerCounseling";
import Postadd from "./page/Postadd";
import LoginSignup from "./file/LoginSignup";
import Login from "./file/Login";
import ForgotPassword from "./file/ForgotPassword";
import WorkWithUs from "./page/WorkWithUs.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workwithuS" element={<WorkWithUs />} />
          <Route path="/CareerCounseling" element={<CareerCounseling />} />

          <Route path="/loginSignUp" element={<LoginSignup />} />
          <Route path="/Postadd" element={<Postadd />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
