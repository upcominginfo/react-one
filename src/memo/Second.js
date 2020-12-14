import React, { useState, memo } from "react";
const Second = (props) => {
  //   const [count, setCount] = useState(1);
  //   const [data, setData] = useState(1);
  console.log("internal component");
  return (
    <div>
      <h1>second component{props.data}</h1>
    </div>
  );
};
export default memo(Second);
