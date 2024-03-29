import LoginStyle from "./LoginStyle";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../contextAPI/ContextProvider.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import PrivateRouter from "../PrivateRouter.jsx";
export default function Login() {
  const { activeUserCredits, setActiveUserCredits, usersData } =
    useContext(Context);
  const { userName, userPassword, authorized } = activeUserCredits;

  const navigate = useNavigate();
  const location = useLocation();
  const [previousRoute, setPreviousRoute] = useState(null);

  // useEffect(() => {
  //   if (location.state && location.state.from) {
  //     setPreviousRoute(location.state.from);
  //   }
  // }, [location]);

  // useEffect(() => {
  //   if (authorized) {
  //     // Navigate based on the previous route
  //     if (previousRoute === "/recipe") {
  //       navigate("/home");
  //     } else if (previousRoute === "/recipe") {
  //       navigate("/recipe");
  //     } else {
  //       // Navigate back to the previous location in the history stack
  //       navigate(-1);
  //     }
  //   }
  // }, [authorized, previousRoute, navigate]);

  function handleLogin(e) {
    e.preventDefault();
    const foundUser = usersData.find(
      (user) => user.userName === userName && user.userPassword === userPassword
    );

    if (foundUser) {
      setActiveUserCredits((prevCredits) => ({
        ...prevCredits,
        authorized: true,
      }));
      navigate("/home");
    } else {
      const message = "You haven't registered yet...Please register...";
      alert(message);
      navigate("/register");
    }
  }

  return (
    <LoginStyle>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Login Form</span>
          </div>
          <form action="#">
            <div className="row">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="User Name"
                required
                onChange={(e) =>
                  setActiveUserCredits((prevState) => ({
                    ...prevState,
                    userName: e.target.value,
                  }))
                }
              />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) =>
                  setActiveUserCredits((prevState) => ({
                    ...prevState,
                    userPassword: e.target.value,
                  }))
                }
              />
            </div>
            <div className="pass">
              <a htmlFor="#">Forgot password?</a>
            </div>
            <div className="row button">
              <button onClick={(e) => handleLogin(e)}>Login</button>
              {/* <input type="submit" value="Login" onClick={()=>handleLogin()} /> */}
            </div>
            <div className="signup-link">
              Not a member? <a href="/register">Signup now</a>
            </div>
          </form>
        </div>
      </div>
    </LoginStyle>
  );
}
