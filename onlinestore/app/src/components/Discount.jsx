import { useState } from "react";
import "./Discount.css"

function Discount(){
  const [allCoupons, setAllCoupons] = useState([]);
  const[coupon, setCoupon] = useState({
    code:"",
    discount:""
  });


  function save(){
    console.log(coupon);
    
    let copy = [...allCoupons] ;
    copy.push (coupon) ; 
    setAllCoupons ( copy) ;
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
        <input className="form-control" type="number" onBlur={handleCoupon} name="discount"/>
      </div>

    <button className="btn btn-outline-success" onClick={save}>Save</button>

    <ul>
      {allCoupons.map ( cp => <li>{cp.code} - {cp.discount}%</li>)}
    </ul>

    </div>
  )
}

export default Discount