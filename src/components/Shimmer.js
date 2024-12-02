import React from "react";

const Shimmer = () => {
  return (
    <div class="shimmer-main" data-testid="shimmer-main">
      <div class="shimmer-img"></div>
      <div className="shimmer-col">
        <div class="shimmer-ui"></div>
        <div class="shimmer-ui"></div>
        <div class="shimmer-ui"></div>
        <div class="shimmer-ui"></div>
      </div>
    </div>
  );
};

export default Shimmer;
