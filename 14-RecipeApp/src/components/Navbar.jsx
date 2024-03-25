import { Outlet, NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { Context } from "../contextAPI/ContextProvider";
export default function Navbar() {
  const { userCredits, setUserCredits } = useContext(Context);
  const { userName, userPassword, authorized } =
    useContext(Context).userCredits;

  function handleLogout() {
    setUserCredits({ userName: "", userPassword: "", authorized: false });
  }
  return (
    <>
      <nav className="nav">
        <h1>Recipe</h1>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">
            Login
          </Link>
          <Link to="/about">About</Link>
          <div className="user-account">
            <small>
              {authorized
                ? `Welcome ${
                    userName.charAt(0).toUpperCase() + userName.slice(1)
                  }`
                : "Log in"}
            </small>

            <br />
            <small onClick={handleLogout}>{authorized ? "Logout" : ""}</small>
          </div>
        </ul>
      </nav>
    </>
  );
}
