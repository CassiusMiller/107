import "./Home.css"
import { Link } from "react-router-dom";



function Home(){
  return(
    <div className="home page">
      <div className="header">
        <h1>Welcome to the Sweet Spot</h1>
      </div>
      <div className="intro">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente non facere natus reiciendis tempora, iste voluptates nihil sit placeat quaerat minus in, quo, voluptas modi cupiditate eos sed ea est?</p>
        <button className="btn btn-outline-info"><Link to="/catalog">
        Check our Catalog
        </Link></button>
      </div>
    </div>
  )
}
export default Home;