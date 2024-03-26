import { useContext } from "react";
import { Context } from "../../contextAPI/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import RegisterStyle from "./RegisterStyle.jsx";
export default function Register() {

  const navigate = useNavigate();

  return (
    <RegisterStyle>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Register Form</span>
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
            <div className="row button">
              <input
                type="submit"
                value="Register"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/recipe");
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </RegisterStyle>
  );
}
