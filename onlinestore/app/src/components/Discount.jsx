import { useState } from "react";
import "./Discount.css"

function Discount(){

  const[coupon, setCoupon] = useState({
    code:"",
    discount:""
  });


  function save(){
    console.log(coupon);
    
  }

  function handleCoupon() {
    const text = e.target.value;
    const name = e.target.name;

    let copy = {...coupon};
    copy[name] =text;
    setCoupon(copy)

    console.log(date.name, "|", date.value);
    
  }

  return(
    <div className="discount">
      <h3>Discount code</h3>

      <div className="form-fied">
        <label className="form-label">Code:</label>
        <input className="form-control" type="text" onBlur={handleCoupon} name="code"/>
      </div>

      <div className="form-fied">
        <label className="form-label">Discount</label>
        <input className="form-control" type="text" onBlur={handleCoupon} name="discount"/>
      </div>

    <button className="btn btn-sm btn-priamry" onClick={save}>Save</button>

    </div>
  )
}

export default Discount