import Product from "../components/Product"
import "./Catologe.css"

const mockData = [
  {
    "title": "pecan",
    "price": 23.98,
    "category": "pie",
    "image": "/images/ppecan.JPG",
    "_id": "1234" 
  },
  {
    "title": "lemon",
    "price": 33.99,
    "category": "pie",
    "image": "/images/plemon.JPG",
    "_id": "3244" 
  },
  {
    "title": "lemon",
    "price": 10.92,
    "category": "Cake",
    "image": "/images/clemon.JPG",
    "_id": "1254" 
  },
  {
    "title": "pumpkin",
    "price": 123.92,
    "category": "pie",
    "image": "/images/ppumkin.JPG",
    "_id": "3432" 
  },
  {
    "title": "apple",
    "price": 123.92,
    "category": "pie",
    "image": "/images/papple.JPG",
    "_id": "7394" 
  },
  {
    "title": "mix Berry",
    "price": 37.92,
    "category": "pie",
    "image": "/images/pmixberry.JPG",
    "_id": "6745" 
  },
  {
    "title": "chocolate",
    "price": 40.99,
    "category": "Cake",
    "image": "/images/cchocolate.JPG",
    "_id": "5674" 
  },
  {
    "title": "vanilla",
    "price": 30.99,
    "category": "Cake",
    "image": "/images/cvanilla.JPG",
    "_id": "0981" 
  },   
]

function Catologe(){
  return(
    <div className="catologe">
      <h1>This a Dope store</h1>

      <div className="list">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  )
}

export default Catologe