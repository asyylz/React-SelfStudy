import "./App.css";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Outlet } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  createRoutesFromElements,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Register from "./routes/Register.jsx";
import Login from "./routes/Login.jsx";
import Navbar from "./components/Navbar.jsx";



export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
 