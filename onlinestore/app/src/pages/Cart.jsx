import "./Cart.css"
import { useContext } from "react";
import DataContext from "../state/dataContext";

function Cart(){
  return(
  <div className="cart page">
    <h1>Ready to check out</h1>
    <div className="prod-list">
      {cart.map(prod=>
        <div className="prod-in-cart">
          <img src={prod.image} alt="" />
          <label className="title">{prod.title} </label>
          <label className="frac-1">${prod.price} </label>
          <label className="frac-1">{prod.quantity} </label>
          <label className="frac-1">${(prod.price * prod.quantity).toFixed(2)} </label>
          <button className="btn btn-sm btn-danger">Remove</button>
        </div>
      )}
    </div>
  </div>
  
  )
}

export default Cart;