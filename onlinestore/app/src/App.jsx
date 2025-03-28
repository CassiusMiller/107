import './App.css'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import Catologe from './pages/Catologe';
import About from './pages/About';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Cart from './pages/Cart';

//load bootstrap and icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {BrowserRouter, Routes, Route} from 'react-router-dom';




function App() {


  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/catologe' element={<Catologe/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
