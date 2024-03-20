import { Link } from "react-router-dom";
import { CustomLink } from "../utils/CustomLink";
import "./Navbar.css"
export default function Navbar() {
  return (
    <nav className="nav">
      <h1>Shopping Cart</h1>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/newProduct">New Product</CustomLink>
        <CustomLink to="/productList">Product List</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
}
