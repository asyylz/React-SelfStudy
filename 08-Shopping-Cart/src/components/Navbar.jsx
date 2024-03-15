import { Link } from "react-router-dom";
import { CustomLink } from "../utils/CustomLink";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Shopping Cart
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/newProduct">New Product</CustomLink>
        <CustomLink to="/productList">Product List</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
}
