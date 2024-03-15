export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Shopping Cart
      </a>
      <ul>
        <li className="active">
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/newProduct">New Product</a>
        </li>
        <li>
          <a href="/productList">Product List</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
