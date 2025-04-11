import Product from '../components/Product'
import "./Catologe.css"

const mockData = [
  {
    "title": "Pecan",
    "price": 24.99,
    "category": "pie",
    "image": "/images/ppecan.JPG",
    "_id": "1234" 
  },
  {
    "title": "Lemon",
    "price": 34.99,
    "category": "pie",
    "image": "/images/plemon.JPG",
    "_id": "3244" 
  },
  {
    "title": "Mix Berry",
    "price": 34.99,
    "category": "pie",
    "image": "/images/pmixberry.WEBP",
    "_id": "6745" 
  },
  {
    "title": "Lemon",
    "price": 14.99,
    "category": "Cake",
    "image": "/images/clemon.JPG",
    "_id": "1254" 
  },
  {
    "title": "Pumpkin",
    "price": 9.99,
    "category": "pie",
    "image": "/images/ppumkin.jpg",
    "_id": "3432" 
  },
  {
    "title": "Apple",
    "price": 44.99,
    "category": "pie",
    "image": "/images/papple.JPG",
    "_id": "7394" 
  },
  {
    "title": "Chocolate",
    "price": 39.99,
    "category": "Cake",
    "image": "/images/cchocolate.WEBP",
    "_id": "5674" 
  },
  {
    "title": "Vanilla",
    "price": 29.99,
    "category": "Cake",
    "image": "/images/cvanilla.JPG",
    "_id": "0981" 
  },   
]

const mockCategories = ["Cake", "Pie", "Cookies"]

function Catologe(){
  
  const [allProducts, setAllProducts] = useState([]);

  async function loadProducts () {
    const data = await DataService.getProducts ();
    setAllProducts (data) ;
  }
  
  async function loadCategories () {
    let cats = await DataService.getCategories ();
    setCategories (cats);
  }

  useEffect (function(){
    loadProducts;
  }, []);

  return(
    <div className="catologe page">
      <h1>Sweets for your Sweet Tooth</h1>

      <div className="filters">
      {mockCategories.map( cat => <button className='btn btn-sm btn-outline-success'>{cat}</button>)}
      </div>

      <div className="list">
        {mockData.map( prod => <Product key={prod._id} data={prod}></Product>)}
      </div>
    </div>
  )
}

export default Catologe