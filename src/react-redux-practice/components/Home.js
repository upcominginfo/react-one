import React from "react";
const Home = () => {
  return (
    <div>
      <h1 style={{ border: "1px solid green", margin: "10px" }}>My cart</h1>
      <h1>Home component</h1>
      <div>
        <div
          style={{ border: "1px solid red", margin: "10px" }}
          className="cart-item"
        >
          <p>this is item one </p>
          <button>Add item</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
