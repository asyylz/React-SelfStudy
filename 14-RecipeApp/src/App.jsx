import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import ContexProvider from "./contextAPI/ContextProvider.jsx";
import Home from "./routes/Home/Home.jsx";
import Login from "./routes/Login/Login.jsx";
import Register from "./routes/Register/Register.jsx";
import About from "./routes/About/About.jsx";
import RecipeDetails from "./routes/Recipe/RecipeDetails.jsx";
import PrivateRouter from "./routes/PrivateRouter.jsx";

export default function App() {
  return (
    <ContexProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recipe" element={<PrivateRouter />}>
            <Route path="" element={<RecipeDetails />} />
          </Route>
          <Route path="/home2" element={<PrivateRouter />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/recipeAuthorized" element={<RecipeDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ContexProvider>
  );
}
