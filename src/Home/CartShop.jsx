/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function CartShop({ cart, setCart, setshowCarts }) {
  const [price, setPrice] = useState(0);

  const cartData = JSON.parse(localStorage.getItem("cart"));
  console.log(cartData);
  // console.log(cart);

  // Remove Product
  function handleRemove(id) {
    console.log(id);
    const updatedCart = cartData.filter((product) => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  // Total Price Product
  function totalPrice() {
    const total = cartData.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setPrice(total);
  }

  useEffect(() => {
    totalPrice();
  });
  // Order Item
  function Order() {
    alert("Your Order Complete!👌");
    const arr = cartData.filter((product) => product === "");
    setCart(arr);
    const empty = [];
    localStorage.setItem("cart", JSON.stringify(empty));

  }

  function handleDecrease(itemId) {
    // Update cart state by decreasing the quantity of the product with the matching id
    const updatedCart = cartData.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function handleIncrease(itemId) {
    const updatedCart = cartData.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );

    // Update state
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <>
      <div id="Cart" className="Card-product">
        <div className="box-cart">
          <h5
            onClick={() => {
              setshowCarts(true);
            }}
          >
            Shopping Cart{" "}
            <p >
              <i 
                className="fa-solid fa-delete-left"
              ></i>
            </p>
          </h5>
          {cartData.map((product) => (
            <div className="item-card" key={product.id}>
              <img className="cart-img" src={product.image} alt="" />
              <div>
                <h4>{product.title}</h4>
                <div className="quantify">
                  <button
                    onClick={() => handleDecrease(product.id)}
                    className="handleDecrease"
                  >
                    -
                  </button>

                  <span className="px-4 py-1">{product.quantity}</span>

                  <button
                    onClick={() => handleIncrease(product.id)}
                    className="handleIncrease"
                  >
                    +
                  </button>
                </div>
                <p>{(product.price * product.quantity).toFixed(2)} $</p>
                <i
                  className="fa-solid fa-trash-can"
                  onClick={() => handleRemove(product.id)}
                ></i>
              </div>
            </div>
          ))}
          <div className="total-price">
            <h4>Total Price</h4>
            <div>
              <p>{price.toFixed(2)} $</p>
              <button className="order" onClick={() => Order()}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
