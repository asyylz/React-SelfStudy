import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRouter() {

    const name="asiye"
    const password="1234"
    return name === "asiye" && password === "1234" ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      );
}
