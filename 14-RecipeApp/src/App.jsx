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
import Navbar from "./components/Navbar.jsx";
import ContexProvider from "./contextAPI/ContextProvider.jsx";



export default function App() {
  return (
    <ContexProvider>
      <Navbar />
      <Outlet />
    </ContexProvider>
  );
}
 