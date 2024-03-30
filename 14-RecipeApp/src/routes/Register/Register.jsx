import { useContext, useState } from "react";
import { Context } from "../../contextAPI/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import RegisterStyle from "./RegisterStyle.jsx";
import LoginRegisterStyle from "../Login/LoginRegisterStyle.jsx";
export default function Register() {
  const { usersData, setUsersData, storedUsers, activeUserDataLS } =
    useContext(Context);
  const [newUser, setNewUser] = useState({ userName: "", userPassword: "" });
  const [error, setError] = useState({
    nameError: "",
    passwordError: "",
  });
  const { userName, userPassword } = newUser;
  const navigate = useNavigate();

  /* -------------- without Localstorage ------------- */
  // function handleNewUser(e) {
  //   e.preventDefault();

  //   if (!userName || userName.trim() === "") {
  //     setError((prevState) => ({
  //       ...prevState,
  //       nameError: "User Name is required",
  //     }));
  //     return;
  //   }
  //   if (!userPassword || userPassword.trim() === "") {
  //     setError((prevState) => ({
  //       ...prevState,
  //       passwordError: "User password is required",
  //     }));

  //     return;
  //   }

  //   const isExist = usersData.some((user) => user.userName === userName);
  //   if (!isExist) {
  //     setUsersData((prevState) => [...prevState, newUser]);
  //     alert("User registered successfully!");
  //   } else {
  //     alert("This user already exists. Please create a new one or log in.");
  //   }
  //   setNewUser({ userName: "", userPassword: "" });
  //   navigate("/login");
  // }

  /* ---------------- Using LocalStorage---------------- */
  function handleNewUserAdd(e) {
    e.preventDefault();
    if (!userName || userName.trim() === "") {
      setError((prevState) => ({
        ...prevState,
        nameError: "User Name is required",
      }));
      return;
    }
    if (!userPassword || userPassword.trim() === "") {
      setError((prevState) => ({
        ...prevState,
        passwordError: "User password is required",
      }));

      return;
    }
    //const storedUsers = JSON.parse(localStorage.getItem("storedUsers")) || [];
    const isExist = storedUsers.some(
      (user) => user.userName === newUser.userName
    );
    if (isExist) {
      alert("This user already exists. Please create a new one or log in.");
    }
    if (!isExist) {
      localStorage.setItem(
        "storedUsers",
        JSON.stringify([{ ...newUser, favRecipes: [] }, ...storedUsers])
      );
      alert("User registered successfully!");
    }
    setNewUser({ userName: "", userPassword: "" });
    navigate("/login");
  }

  /* ----------------------- Return ----------------------- */
  return (
    <RegisterStyle>
      <LoginRegisterStyle>
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
                  onFocus={() => setError({ nameError: "", passwordError: "" })}
                  autoFocus
                  value={newUser.userName}
                  placeholder="User Name"
                  required
                  onChange={(e) => {
                    setNewUser((prevState) => ({
                      ...prevState,
                      userName: e.target.value.toLowerCase(),
                    }));
                  }}
                />
                {<span className="error">{error.nameError}</span>}
              </div>
              <div className="row">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  onFocus={() => setError({ nameError: "", passwordError: "" })}
                  value={newUser.userPassword}
                  required
                  onChange={(e) => {
                    setNewUser((prevState) => ({
                      ...prevState,
                      userPassword: e.target.value,
                    }));
                  }}
                />
                {<span className="error">{error.passwordError}</span>}
              </div>
              <div className="row button">
                {/* <input type="submit" value="Register" onClick={handleNewUser} /> */}

                {/* ---------------- Localstorage handler ---------------- */}
                <input
                  type="submit"
                  value="Register"
                  onClick={(e) => handleNewUserAdd(e)}
                />
              </div>
            </form>
          </div>
        </div>
      </LoginRegisterStyle>
    </RegisterStyle>
  );
}
