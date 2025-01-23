/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import useCartReducer from "../reducer/CartReducer";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const context = useCartReducer();

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

export default CartContextProvider;
