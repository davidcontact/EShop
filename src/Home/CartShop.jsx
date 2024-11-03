/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

export default function CartShop({ cart, setCart, setshowCart }) {
  const [price, setPrice] = useState(0);

  // Remove Product
  function handleRemove(id) {
    const arr = cart.filter((product) => product.id !== id);
    setCart(arr);
  }

  // Total Price Product
  function totalPrice() {
    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setPrice(total);
  }
  useEffect(() => {
    totalPrice();
  });
  // Order Item
  function Order() {
    alert("Your Order Complete!👌");
    const arr = cart.filter((product) => product === "");
    setCart(arr);
  }

  function handleDecrease(itemId) {
    setCart(
      cart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function handleIncrease(itemId) {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }
  return (
    <>
      <div id="Cart" className="Card-product">
        <div className="box-cart">
          <h5
            onClick={() => {
              setshowCart(true);
            }}
          >
            Shopping Cart{" "}
            <p>
              <i
                className="fa-solid fa-delete-left"
                onClick={() => {
                  setshowCart(true);
                }}
              ></i>
            </p>
          </h5>
          {cart.map((product) => (
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
            <h4>Total Price of your Cart Order</h4>
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
