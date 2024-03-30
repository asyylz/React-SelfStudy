import LoginRegisterStyle from "./LoginRegisterStyle.jsx";
import { useContext } from "react";
import { Context } from "../../contextAPI/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {
    activeUserCredits,
    setActiveUserCredits,
    usersData,
    setStoredUsers,
    storedUsers,
    activeUserDataLS,
  } = useContext(Context);
  const { userName, userPassword } = activeUserCredits;

  const navigate = useNavigate();

  /* ---------------- Without LocalStorage ---------------- */
  // function handleLogin(e) {
  //   e.preventDefault();
  //   const foundUser = usersData.find(
  //     (user) => user.userName === userName && user.userPassword === userPassword
  //   );

  //   if (foundUser) {
  //     setActiveUserCredits((prevCredits) => ({
  //       ...prevCredits,
  //       authorized: true,
  //     }));
  //     navigate("/home");
  //   } else {
  //     const message = "You haven't registered yet...Please register...";
  //     alert(message);
  //     navigate("/register");
  //   }
  // }

  /* ------------------ With LocalStorage ----------------- */
  const handleLogin = (e) => {
    e.preventDefault();
    if (activeUserDataLS) {
      setActiveUserCredits((prevCredits) => ({
        ...prevCredits,
        authorized: true,
      }));
      /* -------------------- localstorage -------------------- */
      const updatedUser = {
        ...activeUserDataLS
      };
      const updatedUsers = storedUsers.map((user) =>
        user.userName === activeUserDataLS.userName ? updatedUser : user
      );
      setStoredUsers(updatedUsers);
      navigate("/home");
    } else {
      alert("You haven't registered yet...Please register...");
      navigate("/register");
    }
  };

  /* ----------------------- Return ----------------------- */
  return (
    <LoginRegisterStyle login="true">
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
            </div>
            <div className="signup-link">
              Not a member? <a href="/register">Signup now</a>
            </div>
          </form>
        </div>
      </div>
    </LoginRegisterStyle>
  );
}
