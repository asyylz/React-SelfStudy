import { Navigate, Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { Context } from "../contextAPI/ContextProvider";
import { useContext, useEffect, useState } from "react";

export default function PrivateRouter() {
  const { authorized } = useContext(Context).activeUserCredits;

  !authorized && alert("You are not logged in!"); // <React.StrictMode> make this allerts come up twice

  return authorized ? <Outlet /> : <Navigate to="/login" />;
}
