import { createContext, useContext } from "react";
import { useState } from "react";
import React from "react";
import { initialProducts } from "../data/product";
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const Product = initialProducts;
  
  return (
    <CartContext.Provider value={{Product}}>{children}</CartContext.Provider>
  );
};

export const useCart = ()=> useContext(CartContext);
