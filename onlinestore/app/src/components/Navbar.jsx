import "./Navbar.css"

import { Link } from "react-router-dom";

function Navbar() {
  return(
    <div className="navbar">
      <span className="title">Sweat Spot</span>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/catologe">Catologe</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li className="cart-container" >
          <i class="fa-solid fa-cart-shopping"></i>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;