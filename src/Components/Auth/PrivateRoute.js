import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./login";

// Accessing protected routes
export default function PrivateRoute() {
  let local_email = localStorage.getItem("local_email");

  return (
    // outlet will allow to navigate through restricted routes if local_email is not null
   local_email ? <Outlet /> : <Login />
  );
}
