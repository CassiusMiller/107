import { createContext } from "react";

const DataContext = createContext({
  cart: [],
  user: {},

  addProdToCart: () => {},
  removeProdFromCart: () => {},
  clearCart: () => {},
});

export default DataContext;