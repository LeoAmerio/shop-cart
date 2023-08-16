import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const ShopCartContext = createContext();

export const ShopCartProvider = ( {children} ) => {
  // Shopping Cart | Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail | Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu Open/Close
  const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);

  // Product Detail | Show product
  const [productShow, setProductShow] = useState({});

  // Card Products
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShopCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productShow,
      setProductShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenu,
      openCheckoutSideMenu,
      closeCheckoutSideMenu
    }}>
      {children}
    </ShopCartContext.Provider>
  );
};

ShopCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
