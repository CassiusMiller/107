import { useState } from 'react';
import "./QuantityPicker.css"

function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    let val = quantity + 1;
    setQuantity(val);
    props.onChange(val);
  }
  function decrease() {
    if (quantity == 1) return;

    let val = quantity - 1;
    setQuantity(val);
    props.onChange(val);
  }

  return(
    <div className="qtpicker">
      <button className="btn btn-outline-secondary" disabled={quantity == 1} onClick={decrease}>-</button>
      <label>{quantity}</label>
      <button className="btn btn-outline-secondary" onClick={increase}>+</button>
    </div>
  )
}

export default QuantityPicker;