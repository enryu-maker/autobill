import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/auth/Login";
import Home from "./screens/Home";
import Dashboard from "./screens/dashboard/Dashboard";
import Cutsomer from "./screens/dashboard/Cutsomer";
import Main from "./screens/dashboard/Main";
import AddService from "./screens/dashboard/AddService";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/main" element={<Main />} />
      <Route path="/customers" element={<Cutsomer />} />
      <Route path="/customer/add" element={<AddService />} />

    </Routes>
  );
}
