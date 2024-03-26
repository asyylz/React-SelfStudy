import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../contextAPI/ContextProvider";
import { useContext } from "react";

export default function PrivateRouter() {
  const { userCredits, setUserCredits, usersData } = useContext(Context);
  const { userName, userPassword, authorized } = userCredits;
  const foundUser = usersData.find(
    (user) => user.userName === userName && user.userPassword === userPassword
  );
  const [loading, setLoading] = useState(true);

  console.log(userCredits);

  useEffect(() => {
    if (foundUser) {
      setUserCredits((prevCredits) => ({ ...prevCredits, authorized: true }));
    } else {
      const message =
        "Either you haven't registered yet or the entered credentials are incorrect.";
      alert(message);
    }
    setLoading(false);
  }, [foundUser, setUserCredits]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return authorized ? <Outlet /> : <Navigate to="/login" />;
}
