import { useState } from "react";
import "./QuantityPicker.css"

function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    let val = quantity + 1;
    setQuantity(val);
  }
  function decrease() {
    let val = quantity - 1;
    if (val>= 1) {
      setQuantity(val);
    }
    
  }

  return(
    <div className="quantitypicker">
      <button className="btn btn-outline-secondary" disabled={quantity == 1} onClick={decrease}>-</button>
      <label>{quantity}</label>
      <button className="btn btn-outline-secondary" onClick={increase}>+</button>
    </div>
  )
}

export default QuantityPicker;