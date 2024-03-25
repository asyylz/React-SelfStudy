import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../contextAPI/ContextProvider";
import { useContext } from "react";

export default function PrivateRouter() {
  const { userName, userPassword, success, setSuccess } = useContext(Context);

  if (userName === "asiye" && userPassword === "1234") {
    console.log("clicked")
    setSuccess(true);
    console.log(success)
  }

  return success ? <Outlet /> : <Navigate to="/login" />;
}
