import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-main" data-testid="shimmer-main">
      <div className="shimmer-img"></div>
      <div className="shimmer-col">
        <div className="shimmer-ui"></div>
        <div className="shimmer-ui"></div>
        <div className="shimmer-ui"></div>
        <div className="shimmer-ui"></div>
      </div>
    </div>
  );
};

export default Shimmer;
