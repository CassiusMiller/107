import { useContext } from "react";
import "./Navbar.css"

import { Link } from "react-router-dom";
import DataContext from "../state/dataContext";
import Cart from "../pages/Cart";

function Navbar() {
  
  const user = useContext(DataContext).user;
  const cart = useContext(DataContext).cart;

  function getNumOfProds () {

      let sum = 0;
      for (let i=0; i<cart. length; i++) {
        const prod = cart [i];
        sum += prod.quantity;
      }
      return sum;
  }

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
            {getNumOfProds()}
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