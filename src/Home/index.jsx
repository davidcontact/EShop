/* eslint-disable no-self-compare */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    setCart(currentCart => {
      const existingItem = currentCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        toast.success("This item is already added to the cart!");
        return currentCart.map(product => 
          product.id === item.id 
            ? { ...product, quantity: product.quantity + 1 }
            : product // Don't forget to return the product if it isn't the one being updated
        );
      }
      toast.success("Item added to the cart!");
      return [...currentCart, { ...item, quantity: 1 }];
    });
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
  function addView(item) {
    setCart(currentCart => {
      const existingItem = currentCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        // toast.success("This item is already added to the cart!");
        return currentCart.map(product => 
          product.id === item.id 
            ? { ...product, quantity: product.quantity + 1 }
            : product // Don't forget to return the product if it isn't the one being updated
        );
      }
      // toast.success("Item added to the cart!");
      return [...currentCart, { ...item, quantity: 1 }];
    });
    setView([]);
  }

  // alert message
  // useEffect(() => {
  //   if (cart.length > 0) {
  //     const lastAddedItem = cart[cart.length - 1]; // Get the last added item
  //     if (lastAddedItem.quantity === 1) {
  //       toast.success("Item added to the cart!");
  //     } else {
  //       toast.success("This item is already added to the cart!");
  //     }
  //   }
  // }, [cart]);
  
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
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
        style={{ marginTop: '47px' }}
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
        addView={addView}
        cart={cart.length}
        setshowCart={setshowCart}
      />
        <Product addToCart={addToCart} ViewClick={ViewClick} />

      <Footer />
    </>
  );
}
