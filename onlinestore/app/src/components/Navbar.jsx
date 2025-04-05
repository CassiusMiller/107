import { useContext } from "react";
import "./Navbar.css"

import { Link } from "react-router-dom";
import DataContext from "../state/dataContext";
import Cart from "../pages/Cart";

function Navbar() {
  
  const user = useContext(DataContext).user;
  const cart = useContext(DataContext).cart;

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
          
          <Link to="/cart" className="btn btn-outline-dark">
            {cart.length}
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </Link>
          <button className="btn btn-outline-dark">
            {user.name}
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;