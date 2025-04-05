import { useState } from "react";
import DataContext from "./dataContext";



function GlobalPorvider(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({id:123, name:"Clay", email:"clay@sdgku.edu"});

  function addProdToCart() {
    
    let copy = [...cart];
    copy.push(item);
    setCart(copy);
  } 
  function removeProdFromCart() {
    
  }

  function clearCart() {
    
  }

  return(
    <DataContext.Provider value={{
      cart: cart,
      user: user,
      addProdToCart: addProdToCart,
      removeProdFromCart: removeProdFromCart,
      clearCart: clearCart,
      }}>
      cart: cart,
      user: user,
      {props.children}
    </DataContext.Provider>
  )
}
export default GlobalPorvider;