import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../contextAPI/ContextProvider";
import { useContext } from "react";

export default function PrivateRouter() {
  const { activeUserCredits } =
    useContext(Context);
  const { authorized } = activeUserCredits;

  return authorized ? <Outlet /> : <Navigate to="/login" />;
}
