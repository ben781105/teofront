import React from 'react'
import '../styles/bestskeleton.css'
function Bestskeleton() {
  return (
   <div className="selling-skeleton">
  {Array.from({ length: 4 }).map((_, index) => (
    <div className="skeleton-sell-item" key={index}>
      <div className="skeleton-sell-image" />
      <div className="skeleton-line short" />
      <div className="skeleton-line" />
    </div>
  ))}
</div>


  )
}

export default Bestskeleton
