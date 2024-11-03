/* eslint-disable no-self-compare */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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
    let isPresent = false;
    cart.forEach((product) => {
      if (product.id === item.id) isPresent = true;
    });
    // if (isPresent) {
    //   setwarning(true);
    //   setTimeout(() => {
    //     setwarning(false);
    //   }, 2000);
    //   return;
    // }
    setCart([...cart, item]);
  }

  // view product
  function ViewClick(item) {
    console.log(item);
    let isPresent = false;
    view.forEach((product) => {
      console.log(product);
      if (product.id === item.id) isPresent = true;
    });

    setView([item]);
  }

  // add to cart in view
  function addView(product) {
    console.log(product);
    let Present = false;
    view.forEach((product) => {
      if (product.id === product.id) Present = true;
    });
    setCart([...cart, product]);
    setView([]);
  }
  
  return (
    <>
      <Header
        cart={cart.length}
        setshowCart={setshowCart}
        showCart={showCart}
      />
      {showCart ? (
        " "
      ) : (
        <CartShop cart={cart} setCart={setCart} setshowCart={setshowCart} />
      )}

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
        addView={addView}
        cart={cart.length}
        setshowCart={setshowCart}
      />
        <Product addToCart={addToCart} ViewClick={ViewClick} />

      <Footer />
    </>
  );
}
