import Header from "./components/Header.jsx";
import Signup from "./components/SignUp.jsx";
import RefBaseLogin from "./components/RefBaseLogin.jsx";
import StateLogin from "./components/StateLogin.jsx";// switch between the login components login component

function App() {
  return (
    <>
      <Header />
      <main>
       <RefBaseLogin />
      
      </main>
    </>
  );
}

export default App;
