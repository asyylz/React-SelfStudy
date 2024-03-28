import { Outlet, NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { AiFillHeart } from "react-icons/ai";
import { useContext } from "react";
import { Context } from "../contextAPI/ContextProvider";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const { activeUserCredits, setActiveUserCredits, setSelectedRecipe } =
    useContext(Context);
  const { userName, userPassword, authorized } =
    useContext(Context).activeUserCredits;
  console.log(userName);
  const navigate = useNavigate();

  function handleLogout() {
    setActiveUserCredits({ userName: "", userPassword: "", authorized: false });
    navigate("/login");
  }
  return (
    <>
      <nav className="nav">
        <h1>Recipe</h1>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/fav">
            My
            <small>
              <AiFillHeart className="heart" />
            </small>
            <br />
            Recipes
          </Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>

          <Link to="/about">About</Link>
          <div className="user-account">
            <small onClick={() => navigate("/login")}>
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
