import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx"; // for initial beginner login component 
import Signup from "./components/SignUp.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Login /> */}
        <Signup />
      </main>
    </>
  );
}

export default App;
