/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function Header({ setshowCart }) {
  const [menu, setmenu] = useState(true);
  const [cartCount, setCartCount] = useState(0);

      const cartData = JSON.parse(localStorage.getItem('cart'));
      const find = localStorage.getItem('cart');
      
      // If cartData is valid and an array, use its length; otherwise, default to 0
      // const count = cartData.length;
      const count = 1;


  
  return (
    <>
      <div className="header">
        <div className="Fix">
          <div className="logo">
            <i
              className="fa-solid fa-bars this-menu"
              // onClick={() => {
              //   setshowCart(true);
              //   // setmenu(!menu);
              // }}
            ></i>
            <a href="/" className="h4">
              EShop
            </a>
          </div>
          <div className="Navlink" onClick={() => setmenu(true)}>
            {/* Cart */}
            <div className="cart">
              <i
                className="fa-solid fa-cart-shopping"
                onClick={() => {
                  setshowCart((prevShowCart) => !prevShowCart); // Toggle showCart
                  // console.log("Cart visibility toggled to:", !showCart);
                }}
              >
                {/* <p>{count}</p> */}
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
                <a className="login" href="/Login">
                  Login
                </a>
                <a className="login" href="/Register">
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
