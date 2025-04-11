import './App.css'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import Catologe from './pages/Catologe';
import About from './pages/About';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ThankYou from './pages/Thankyou';

//load bootstrap and icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalPorvider from './state/GlobalProvider';





function App() {


  return (
    <GlobalPorvider>
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/catologe' element={<Catologe/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/thankyou' element={<ThankYou/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </GlobalPorvider>
  )
}

export default App
