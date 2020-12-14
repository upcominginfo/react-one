import React, { Component, Suspense, lazy } from "react";
import Loading from "../lazy-loading/Loading";
class LazyLoading extends Component {
  render() {
    return (
      <div>
        <h1>This heading will show without loading..</h1>
        <Suspense
          fallback={
            <div>
              Appear since when component not ready inside this Loading
              Component. like loading....
            </div>
          }
        >
          <Loading />
        </Suspense>
      </div>
    );
  }
}

export default LazyLoading;
