import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../contextAPI/ContextProvider";
import { useContext } from "react";

export default function PrivateRouter() {
  const { userCredits, setUserCredits } = useContext(Context);
  const { userName, userPassword,authorized } = userCredits;
  const [loading, setLoading] = useState(true);
  console.log(userCredits)

  useEffect(() => {
    if (userName === "asiye" && userPassword === "1234") {
      setUserCredits(prevCredits => ({ ...prevCredits, authorized: true }));
    }
    setLoading(false);
  }, [userName, userPassword, setUserCredits]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return authorized ? <Outlet /> : <Navigate to="/login" />;
}
