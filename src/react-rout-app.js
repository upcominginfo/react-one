// import React from "react";
import "./App.css";
import Home from "./Home";
// import HomeF from "./Home/index_functional";
// import ComponentDid_Mount from "./Life-cycle/ComponentDid_Mount.js";
import ComponentDidUpdatePr from "./Life-cycle/ComponentDid_Update.js";
// import HomeF from "./Home/index_functional";
// import ComponentWillUnmountf from "./Life-cycle/ComponentWillUnmountF.js"
import UseEffectHook from "./react-hooks/UseEffectHook";
// import StateHook from "./react-hooks/StateHook.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Link to="/">Home</Link>
          <Link to="/useEffect">useEffect</Link>
          <Link to="/ComponentDidUpdatePr">ComponentDidU</Link>
          <Route exact path="" component={Home} />
          <Route path="/useEffect" component={UseEffectHook} />
          <Route
            path="/ComponentDidUpdatePr"
            component={ComponentDidUpdatePr}
          />
          {/* <h1>Home ****-> </h1>
          <Home />
          <h1>useEffect ****-> </h1>
          <UseEffectHook />
          <h1>ComponentDidU pdatePr ****-> </h1>
          <ComponentDidUpdatePr /> */}
        </Router>
      </header>
    </div>
  );
}

export default App;
