import dataService from "../services/dataService";
import "./ProductAdmin.css"
import { useState } from "react"

function ProductAdmin(){

  const [product,setProduct] = useState({
    title: "", 
    image: "", 
    price: "",
    category: ""
    }) ;

  function handleChange(e) {
    let text = e.target.value;
    let name = e.target.name;

    console. log (name, text)

    let copy = {...product};
    copy [name] = text;
    setProduct(copy);

  }

  async function save(){
    console.log(product);
    
    let fixedProduct = {...product};
    fixedProduct.price = parseFloat(product.price);
    let response = await dataService.saveProduct(fixedProduct);
  }

  return(
    <div className="padmin">
      <h3>Discount code</h3>

      <div className="form-fied">
        <label className="form-label">Title</label>
        <input className="form-control" type="text" onBlur={handleChange} name="title"/>
      </div>

      <div className="form-fied">
        <label className="form-label">Price</label>
        <input className="form-control" type="text" onBlur={handleChange} name="price"/>
      </div>

      <div className="form-fied">
        <label className="form-label">Image</label>
        <input className="form-control" type="text" onBlur={handleChange} name="image"/>
      </div>

      <div className="form-fied">
        <label className="form-label">Category</label>
        <input className="form-control" type="text" onBlur={handleChange} name="catagory"/>
      </div>

    <button onClick={save} className="btn btn-outline-success" >Save</button>

    </div>
  )
}

export default ProductAdmin 