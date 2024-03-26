import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../contextAPI/ContextProvider";
import { useContext } from "react";

export default function PrivateRouter() {
  const { activeUserCredits, setActiveUserCredits, usersData } =
    useContext(Context);
  const { userName, userPassword, authorized } = activeUserCredits;
  
  const foundUser = usersData.find(
    (user) => user.userName === userName && user.userPassword === userPassword
  );
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    if (foundUser) {
      setActiveUserCredits((prevCredits) => ({
        ...prevCredits,
        authorized: true,
      }));
    } else {
      const message = "You haven't registered yet...Please register...";
      alert(message);
    }
    setLoading(false);
  }, [foundUser, setActiveUserCredits]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return authorized ? <Outlet /> : <Navigate to="/login" />;
}
