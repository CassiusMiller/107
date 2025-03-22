import Discount from "../components/Discount";
import ProductAdmin from "../components/ProductAdmin";
import "./Admin.css"

function Admin(){
  return(
    <div className="admin">
      <h1>Store admin</h1>

      <div className="parent">
        <section>
          <ProductAdmin/>
        </section>
        <section>
          <Discount/>
        </section>
      </div>
    </div>
  )
}

export default Admin;