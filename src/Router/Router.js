import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import LandingPage from "../Components/Landing/LandingPage";
import Login from "../Components/Auth/Login/Login";
import Registration from "../Components/Auth/Registration/Registration";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
}

export default Router;
