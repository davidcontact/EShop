/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./View.css";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Data from "../Data/Data";

// export default function View({
//   setCart,
//   view,
//   setView,
//   addView,
//   cart,
//   setshowCart,
// }) {
//   function handleRemove(id) {
//     const arr = view.filter((product) => product.id !== id);
//     setView(arr);
//   }

//   return (

//   );
// }
export default function View({
  // setCart,
  view,
  setView,
  addView,
  // cart,
  setshowCart,
}) {
  const [cart, setCart] = useState([]);
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
  const { state } = useLocation(); // Get state passed from the Link
  const { id } = useParams(); // Get the id from the URL (in case you need it)
  // Access the product data that was passed
  const product = state?.product || Data.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>No product data found {id}</p>;
  }
  return (
    <>
      <Header setshowCart={setshowCart} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
        style={{ marginTop: "47px" }}
      />
      {/* {product.map((product) => ( */}
      <div className="view-Box">
        <a className="Back" href="/">
          <i className="fa-solid fa-angles-left"></i>
          <h4>Back</h4>
        </a>
        <div className="View-item">
          <div className="view-img">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="view-detail">
            <div className="category">{product.category}</div>
            <h4>{product.title}</h4>
            <div className="detail-price">
              <p>Price: ${product.price}</p>
              <select className="Size-detail" defaultValue="">
                <option value="" disabled>
                  Select Size
                </option>
                <option value="M">Size: M</option>
                <option value="L">Size: L</option>
                <option value="XL">Size: XL</option>
              </select>
              <div className="add-detail">
                {/* <input type="number" min="1" defaultValue="1" className="quantify"/> */}
                <button
                  onClick={() => {
                    console.log("testing");
                    addToCart(product);
                    // setCart((prevCart) => [...prevCart, product]);
                  }}
                >
                  Add To Cart
                </button>
              </div>
              <div className="detail-info">
                <h4>Product Detail</h4>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* ))} */}
    </>
  );
}
