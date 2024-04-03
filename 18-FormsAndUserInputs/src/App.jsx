import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx"; // for initial beginner login component
import Signup from "./components/SignUp.jsx";
import StateLogin from "./components/StateLogin.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Login /> */}
        {/* <Signup /> */}
        <StateLogin />
      </main>
    </>
  );
}

export default App;
