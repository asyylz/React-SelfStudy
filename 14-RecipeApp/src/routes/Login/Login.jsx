import LoginStyle from "./LoginStyle";
import { useContext } from "react";
import { Context } from "../../contextAPI/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";
export default function () {
  const { userCredits, setUserCredits } = useContext(Context);
  const { userName, userPassword, authorized } = userCredits;

  const navigate = useNavigate();

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
                  setUserCredits((prevState) => ({
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
                  setUserCredits((prevState) => ({
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
              <input
                type="submit"
                value="Login"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/recipe")
                }}
              />
            </div>
            <div className="signup-link">
              Not a member? <a href="#">Signup now</a>
            </div>
          </form>
        </div>
      </div>
    </LoginStyle>
  );
}
