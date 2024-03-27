import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../contextAPI/ContextProvider";
import { useContext } from "react";

export default function PrivateRouter() {
  const { authorized } = useContext(Context).activeUserCredits;
  //const { authorized } = activeUserCredits;

  !authorized && alert("You are not logged in!");

  return authorized ? <Outlet /> : <Navigate to="/login" />;
}
