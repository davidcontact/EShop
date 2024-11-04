import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./View.css";



export default function View({
  setCart,
  view,
  setView,
  addView,
  cart,
  setshowCart,
}) {
  function handleRemove(id) {
    const arr = view.filter((product) => product.id !== id);
    setView(arr);
  }

  return (
    <>
      <Header cart={cart} setshowCart={setshowCart} />
      {view.map((product) => (
        <div className="view-Box" key={product.id}>
          <div className="Back" onClick={() => handleRemove(product.id)}>
            <i className="fa-solid fa-angles-left"></i>
            <h4>Back</h4>
          </div>
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
                  <option value="" disabled>Select Size</option>
                  <option value="M">Size: M</option>
                  <option value="L">Size: L</option>
                  <option value="XL">Size: XL</option>
                </select>
                <div className="add-detail">
                  {/* <input type="number" min="1" defaultValue="1" className="quantify"/> */}
                  <button
                    onClick={() => {
                      console.log("testing")
                      addView(product);
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
          <Footer/>
        </div>
      ))}
    </>
  );
}
