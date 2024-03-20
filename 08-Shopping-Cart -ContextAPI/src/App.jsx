import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import { Route, Routes } from "react-router-dom";
import CartContextProvider from "./store/shopping-cart-context";

function App() {
  return (
    <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </CartContextProvider>
  );
}

export default App;
