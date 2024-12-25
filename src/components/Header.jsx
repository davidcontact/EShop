/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import CartShop from '../Home/CartShop';
import { CSSTransition } from 'react-transition-group';

// eslint-disable-next-line react/prop-types
export default function Header({ setshowCart }) {
  const [menu, setMenu] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setshowCarts] = useState(true);

  const cartData = JSON.parse(localStorage.getItem("cart"));
  console.log(cartData);
  /* eslint-disable no-use-before-define */
  let count;
  /* eslint-disable no-use-before-define */

  if (cartData == null) {
    count = 0;
    console.log(count);
  }else{
    count = cartData.length;
    console.log(count);
  }
  // If cartData is valid and an array, use its length; otherwise, default to 0
  // const count = cartData.length;
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
    {/* {showCart ? (
        " "
      ) : (
        <CartShop setCart={setCart} setshowCarts={setshowCarts} />
      )} */}
      <CSSTransition
        in={!showCart} // Show when showCart is false
        timeout={300} // Duration of the transition
        classNames="Card-product" // Matching the CSS class names for animation
        unmountOnExit // Remove the component from the DOM when hidden
      >
        <CartShop setCart={setCart} setshowCarts={setshowCarts} />
      </CSSTransition>
      <div className="header">
        <div className="Fix">
          <div className="logo">
            <i
              className="fa-solid fa-bars this-menu"
              onClick={toggleMenu}
            ></i>
            <a href="/index" className="h4">
              EShop
            </a>
          </div>
          <div className="Navlink" onClick={() => setMenu(true)}>
            {/* Cart */}
            <div className="cart">
              <i
                className="fa-solid fa-cart-shopping"
                onClick={() => {
                  setshowCarts((prevShowCart) => !prevShowCart); // Toggle showCart
                }}
              >
                <p>{count}</p>
              </i>
              <p className="cart1">Cart</p>
            </div>
            {/* User */}

            <div className="user">
              <a href="/User">
                <i className="fa-solid fa-user"></i>
              </a>
              <p>User</p>
            </div>
            {/* Login */}
            {menu ? (
              ""
            ) : (
              <div className="div">
                <a className="login" href="/index">
                  Login
                </a>
                <a className="login" href="/index">
                  Register
                </a>
                <i
                  // onClick={() => {
                  //   setshowCart(true);
                  // }}
                  className="fa-solid fa-arrow-left"
                ></i>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
