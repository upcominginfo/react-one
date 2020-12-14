import React, { useState, useEffect } from "react";

function UseEffectHook() {
  let [count, setCount] = useState(10);
  useEffect(() => {
    console.log("useEffect", count);
  }, []);
  return (
    <div>
      <h1>use Effect Example -> {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase useEffect
      </button>
    </div>
  );
}

export default UseEffectHook;
