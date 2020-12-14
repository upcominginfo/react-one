import React, { useState } from "react";

function StateHook() {
  let [count, setCount] = useState(10);
  return (
    <div>
      <h1>increase the state no -> {count}</h1>
      <button onClick={() => setCount(count+1)}>increase</button>
    </div>
  );
}

export default StateHook;
