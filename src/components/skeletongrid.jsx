import React from "react";
import "../styles/skeleton.css"; 

const SkeletonGrid = () => {
  return (
    <div className="skeleton-wrapper">
    <div className="skeleton-grid">
      {Array.from({ length: 16 }).map((_, index) => (
        <div key={index} className="skeleton-card">
          <div className="skeleton-image"></div>
          <div className="skeleton-text skeleton-name"></div>
          <div className="skeleton-text skeleton-price"></div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SkeletonGrid;
