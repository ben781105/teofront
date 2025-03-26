import React from "react";
import "../styles/detailskeleton.css";
const CakeDetailSkeleton = () => {

  return (
    <div className="skeleton-detail-container">
      {/* Cake Detail Section */}
      <div className="skeleton-detail">
        <div className="skeleton-cake-image"></div>
        <div className="skeleton-cake-info">
          <div className="skeleton-title"></div>
          <div className="skeleton-price"></div>
          <div className="skeleton-description"></div>
          <div className="skeleton-description"></div>
          <div className="skeleton-description"></div>
          <div className="skeleton-description"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>

      {/* Similar Cakes Section */}
      <div className="skeleton-similar-cakes">
        <div className="skeleton-similar-title"></div>
        <div className="skeleton-similar-grid">
          <div className="skeleton-similar-item"></div>
          <div className="skeleton-similar-item"></div>
          <div className="skeleton-similar-item"></div>
          <div className="skeleton-similar-item"></div>
        </div>
      </div>
    </div>
  );
};

export default CakeDetailSkeleton;
