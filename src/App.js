import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/auth/Login";
import Home from "./screens/Home";
import Dashboard from "./screens/dashboard/Dashboard";
import Cutsomer from "./screens/dashboard/Cutsomer";
import Main from "./screens/dashboard/Main";
import AddService from "./screens/dashboard/AddService";
import Bill from "./screens/dashboard/Bill";
import Record from "./screens/dashboard/Record";
import { useDispatch, useSelector } from "react-redux";
import { Init } from "./Store/actions";
export default function App() {
  const dispatch = useDispatch();
  const access = useSelector((state) => state.Reducers.access);
  React.useEffect(() => {
    dispatch(Init());
  }, []);
  return (
    <Routes>
      <Route path="/" element={access ? <Dashboard /> : <Login />} />
      <Route path="/dashboard" element={access ? <Dashboard /> : <Login />} />
      <Route path="/main" element={access ? <Main /> : <Login />} />
      <Route path="/bill" element={access ? <Bill /> : <Login />} />
      <Route path="/record/:name" element={access ? <Record /> : <Login />} />
      <Route path="/customers" element={access ? <Cutsomer /> : <Login />} />
      <Route
        path="/customer/add"
        element={access ? <AddService /> : <Login />}
      />
    </Routes>
  );
}
