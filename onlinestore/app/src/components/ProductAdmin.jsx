import "./ProductAdmin.css"
import { useState } from "react"

function ProductAdmin(){

  return(
    <div className="padmin">
      <h3>Discount code</h3>

      <div className="form-fied">
        <label className="form-label">Title</label>
        <input className="form-control" type="text" />
      </div>

      <div className="form-fied">
        <label className="form-label">Price</label>
        <input className="form-control" type="text"/>
      </div>

      <div className="form-fied">
        <label className="form-label">Image</label>
        <input className="form-control" type="text"/>
      </div>

      <div className="form-fied">
        <label className="form-label">Category</label>
        <input className="form-control" type="text" />
      </div>

    <button onClick={save} className="btn btn-outline-success" >Save</button>

    </div>
  )
}

export default ProductAdmin 