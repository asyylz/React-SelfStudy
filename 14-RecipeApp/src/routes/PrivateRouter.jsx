import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../contextAPI/ContextProvider";
import { useContext } from "react";

export default function PrivateRouter() {
  const { userCredits, setUserCredits, usersData } = useContext(Context);
  const { userName, userPassword, authorized } = userCredits;
  const [loading, setLoading] = useState(true);
  const foundUser = usersData.find((user) => user.userName === userName && user.password === userPassword);
  console.log(foundUser)

  useEffect(() => {
    if (foundUser) {
      setUserCredits((prevCredits) => ({ ...prevCredits, authorized: true }));
    }
    setLoading(false);
  }, [userName, userPassword, setUserCredits]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return authorized ? <Outlet /> : <Navigate to="/login" />;
}
