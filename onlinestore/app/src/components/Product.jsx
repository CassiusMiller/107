import Add from "./add";
import "./Product.css"
import QuantityPicker from "./QuantityPicker";

function Product(){
  function Add() {
    console.log("item was added");
  }

  return(
    <div className="product">
      <h5>Product</h5>

      
      <QuantityPicker/>
      <i class="fa-solid fa-cart-plus"></i>
      <button className="btn btn-outline-primary" onClick={Cart}>Add</button>

      
    </div>
  )
}

export  default Product;