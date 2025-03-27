import "../styles/menu.css";
import SkeletonGrid from "./skeletongrid";
import ErrorComponent from "./ErrorComponent"; // Import the error component
import { Link } from "react-router-dom";
import imageUrl from '../imageurl'
function Menu({ cakes, loading, error }) {
  return (
    <div className="menu" id="menu">
      <h1>Our Menu</h1>
       <p className="welcome">Discover our delicious selection of handcrafted cakes, made with the finest ingredients. 
        Whether for a special occasion or a sweet treat, there is a perfect cake for everyone.</p>
     
      {error && <ErrorComponent message={error} />}
      {(loading || error) && <SkeletonGrid />}
      {!loading && !error && (
        <div className="menu-grid">
          {cakes.map((cake) => (
            <Link to={`/cake-detail/${cake.slug}`} key={cake.id}><div className="menu-item" style={{color:'inherit'}}>
              <div className="menu-image"><img src={`${imageUrl}${cake.image}`} alt={cake.name} loading='lazy'/></div>
              <h3 style={{textDecoration:'none',color:'inherit'}}>{cake.name}</h3>
              <p>${(cake.price).toLocaleString()}</p>
              
            </div></Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
