import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./login";

export default function PrivateRoute() {
  let local_email = localStorage.getItem("local_email");

  return (
   local_email ? <Outlet /> : <Login />
  );
}
