import React from 'react'
import '../styles/skeleton.css'
function Homeskeleton() {
  return (
     <div className="latest-grid">
  {Array.from({ length: 3 }).map((_, index) => (
    <div className="latest-item skeleton-item" key={index}>
      <div className="skeleton-image" />
      <div className="skeleton-line short" />
      <div className="skeleton-line" />
    </div>
  ))}
</div>

  )
}

export default Homeskeleton
