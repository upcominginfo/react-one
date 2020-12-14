import React, { useState } from "react";
import Second from "../memo/Second";
const First = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(1);
  return (
    <div>
      <h1>First component count {count}</h1>
      <Second data={data} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        set count
      </button>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        set data
      </button>
    </div>
  );
};
export default First;
