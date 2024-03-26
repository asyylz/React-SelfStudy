import { useContext } from "react";
import { Context } from "../../contextAPI/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import RegisterStyle from "./RegisterStyle.jsx";
export default function Register() {
  const { setNewUser, newUser, usersData, setUsersData } = useContext(Context);

  function handleNewUser(e) {
    e.preventDefault();
    const { userName, userPassword } = newUser;
    //const isExist = !!usersData.find((user) => user.name === name);
    const isExist = usersData.some((user) => user.userName === userName);
    if (!isExist) {
      setUsersData((prevState) => [...prevState, newUser]);
    } else {
      alert("This user already exist, create a new one or please log in!");
    }
    navigate("/login");
  }

  
  

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
                  setNewUser((prevState) => ({
                    ...prevState,
                    userName: e.target.value.toLowerCase(),
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
                  setNewUser((prevState) => ({
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
                onClick={handleNewUser}
              />
            </div>
          </form>
        </div>
      </div>
    </RegisterStyle>
  );
}
