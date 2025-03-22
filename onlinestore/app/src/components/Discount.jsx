import "./Discount.css"

function Discount(){
  function save(){

  }


  return(
    <div className="discount">
      <h3>Discount code</h3>

      <div className="form-fied">
        <label className="form-label">Code:</label>
        <input className="form-control" type="text" />
      </div>

      <div className="form-fied">
        <label className="form-label">Discount</label>
        <input className="form-control" type="text" />
      </div>

    <button className="btn btn-sm btn-priamry" onClick={save}>Save</button>

    </div>
  )
}

export default Discount