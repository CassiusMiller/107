import './App.css'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import Catologe from './pages/Catologe';
import About from './pages/About';
import Admin from './pages/Admin';

//load bootstrap and icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";



function App() {


  return (
    <>

      <Navbar/>

      <Catologe/>
      
      <About/>

      <Admin/>

      <Footer/>
    </>
  )
}

export default App
