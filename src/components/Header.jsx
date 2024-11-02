/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Header({ cart, setshowCart, showCart }) {
  const [menu, setmenu] = useState(true);
  return (
    <>
      <div className="header">
        <div className="Fix">
          <div className="logo">
            <i
              className="fa-solid fa-bars"
              onClick={() => {
                setshowCart(true);
                setmenu(!menu);
              }}
            ></i>
            <a href="/" className="h4">
              E-Commerce Shop
            </a>
          </div>
          <div className="Navlink" onClick={() => setmenu(true)}>
            {/* Cart */}
            <div className="cart">
              <i
                className="fa-solid fa-cart-shopping"
                onClick={() => {
                  setshowCart(!showCart);
                }}
              >
                <p>{cart}</p>
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
                  onClick={() => {
                    setshowCart(true);
                  }}
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
