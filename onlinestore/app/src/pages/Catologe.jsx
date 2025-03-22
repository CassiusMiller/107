import Product from '../components/Product'
import "./Catologe.css"

const mockData = [
  {
    "title": "pecan",
    "price": 24.99,
    "category": "pie",
    "image": "/images/ppecan.JPG",
    "_id": "1234" 
  },
  {
    "title": "lemon",
    "price": 34.99,
    "category": "pie",
    "image": "/images/plemon.JPG",
    "_id": "3244" 
  },
  {
    "title": "lemon",
    "price": 14.99,
    "category": "Cake",
    "image": "/images/clemon.JPG",
    "_id": "1254" 
  },
  {
    "title": "pumpkin",
    "price": 9.99,
    "category": "pie",
    "image": "/images/ppumkin.JPG",
    "_id": "3432" 
  },
  {
    "title": "apple",
    "price": 44.99,
    "category": "pie",
    "image": "/images/papple.JPG",
    "_id": "7394" 
  },
  {
    "title": "mix Berry",
    "price": 34.99,
    "category": "pie",
    "image": "/images/pmixberry.JPG",
    "_id": "6745" 
  },
  {
    "title": "chocolate",
    "price": 39.99,
    "category": "Cake",
    "image": "/images/cchocolate.JPG",
    "_id": "5674" 
  },
  {
    "title": "vanilla",
    "price": 29.99,
    "category": "Cake",
    "image": "/images/cvanilla.JPG",
    "_id": "0981" 
  },   
]

const mockCategories = ["Cake", "Pie", "Cookies"]

function Catologe(){
  return(
    <div className="catologe">
      <h1>Check out these sweats</h1>

      <div className="filters">
      {mockCategories.map( cat => <button className='btn btn-sm btn-outline-success'>{cat}</button>)}
      </div>

      <div className="list">
        {mockData.map( prod => <Product key={item._id} data={item}></Product>)}
      </div>
    </div>
  )
}

export default Catologe