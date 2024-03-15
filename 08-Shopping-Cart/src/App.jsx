import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </>
  );
}

export default App;
