import React, { useState } from "react";
import Header from "../components/Header";

export default function Index() {
  // This must be capitalized
  const [view, setView] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setshowCart] = useState(true);

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
    </>
  );
}
