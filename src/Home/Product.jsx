/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Home.css";
import data from "../Data/Data";

function Product({ addToCart, ViewClick }) {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="itemApi">
        <h4 className="reComment">
          Recommended&nbsp; <p>Product</p>
        </h4>
        <div className="search">
          <input
            type="text"
            className="searchItem"
            placeholder="Search Product"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <br />
        <div className="ItemBox">
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title &&
                    item.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => (
              <div className="proDuct" key={item.id}>
                <img className="ing" src={item.image} />
                <h4>{item.title}</h4>
                <p>{item.price}$</p>
                <button onClick={() => addToCart(item)}>Add To Cart</button>
                <button onClick={() => ViewClick(item)}>View Item</button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Product;
