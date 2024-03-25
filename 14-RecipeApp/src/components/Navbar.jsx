import { Outlet, NavLink, Link } from "react-router-dom";
import { CustomLink } from "./CustomLink";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <h1>Recipe</h1>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>
        </ul>
      </nav>

    </>
  );
}
