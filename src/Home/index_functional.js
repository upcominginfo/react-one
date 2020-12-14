import React from "react";
function HomeF(props) {
  let testFun = () => {
    console.log("try fun", "hello");
  };
  return (
    <div>
      <h1 onClick={testFun}>Functional Component</h1>
    </div>
  );
}
export default HomeF;
