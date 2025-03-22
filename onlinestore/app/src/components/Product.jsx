import { useState } from "react";
import "./Product.css"
import QuantityPicker from './QuantityPicker';

function Product(props){
  const [quantity, setQuantity] = useState(1);

  function add() {
    console.log("item was added");
  }

  function handleQuantity(qty){
    setQuantity(qty);
  }

  return(
    <div className="product">

      <img src={props.data.image} alt="" />

      <h5>{props.data.title}</h5>

      <div className="prices">
        <label className="unit">Unit Price</label>
        <label className="unit">Total</label>
      </div>

      <div className="prices">
        <label className="unit">${props.data.price.toFixed(2)}</label>
        <label className="total">${(props.data.price * quantity).toFixed(2) }</label>
      </div>

      <div className="controls">
        <QuantityPicker onChange={handleQuantity} />
        
        <button className="btn btn-outline-primary" onClick={add}>
          <i className="fa-solid fa-cart-plus"></i>
          Add
        </button>
      </div>
      
    </div>
  )
}

export  default Product;