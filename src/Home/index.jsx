/* eslint-disable no-self-compare */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img1 from "../assets/d1.jpg";
import img2 from "../assets/d2.jpg";
import img3 from "../assets/bgcn.png";
import Product from "./Product";
import View from "./View";
import CartShop from "./CartShop";

export default function Index() {
  // This must be capitalized
  const [view, setView] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setshowCart] = useState(true);

  // add To Cart
  function addToCart(item) {
    console.log(item);
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = currentCart.find(
      (cartItem) => cartItem.id === item.id
    );
    // If the item already exists, update its quantity
    if (existingItem) {
      toast.success("This item is already added to the cart!");
      const updatedCart = currentCart.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 } // Update quantity
          : product
      );

      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Update the cart state
      setCart(updatedCart);
      return;
    }

    toast.success("Item added to the cart!");
    const newCart = [...currentCart, { ...item, quantity: 1 }];

    // Save the new cart to localStorage
    localStorage.setItem("cart", JSON.stringify(newCart));

    // Update the cart state
    setCart(newCart);
  }

  const cartData = 1;
  return (
    <>
      <Header
        cartData={cartData}
        setshowCart={setshowCart}
        showCart={showCart}
      />
      {showCart ? (
        " "
      ) : (
        <CartShop cart={cart} setCart={setCart} setshowCart={setshowCart} />
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
        style={{ marginTop: "47px" }}
      />
      <div className="space2">
        <div className="NameShop">
          <div className="intro">
            <h4>Good product from world wide</h4>
            <h2>Chinese New Year 🎉</h2>
            <p>Discount all product in this website %</p>
            <a href="#product">Shop Now</a>
          </div>
        </div>
        <div className="item">
          <img src={img1} className="img1" />
          <img src={img2} className="img1" />
          <img src={img3} className="img1" />
        </div>
      </div>
      <View
        setCart={setCart}
        view={view}
        setView={setView}
        addToCart={addToCart}
        cart={cart.length}
        setshowCart={setshowCart}
      />
      {/* <Product addToCart={addToCart} ViewClick={ViewClick} /> */}
      <Product addToCart={addToCart} />

      <Footer />
    </>
  );
}
