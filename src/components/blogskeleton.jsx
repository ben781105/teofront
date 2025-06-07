import React from 'react'
import '../styles/blogskeleton.css'
function Blogskeleton() {
  return (
    <div className="homepost">
  {Array.from({ length: 4 }).map((_, index) => (
    <div className="skeleton-blog-card" key={index}>
      <div className="skeleton-backdrop">
        <div className="skeleton-text short" />
        <div className="skeleton-button" />
      </div>
    </div>
  ))}
</div>

  )
}

export default Blogskeleton
