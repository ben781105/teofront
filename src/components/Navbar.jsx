import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart, faUser, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/authContext";

function Navbar({ cartNumber }) {
  const { isAuthenticated, username, setIsAuthenticated } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  

  const logout = () => {
    localStorage.removeItem("access");
    setIsAuthenticated(false);
  };
        const handleDisappear=()=>{
        if(window.innerWidth<=768){
          setMenuOpen(false)
        }
        
        }
    
  

  return (
    <div className="navbar">
      <h2>Teo Cakes</h2>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`} onClick={handleDisappear} >
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "notactive")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "notactive")}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "notactive")}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="nav-right">
        {isAuthenticated ? (
          <>
            <NavLink to="/Account" style={{ color: "inherit",fontWeight:'bolder' }}>
              Hi, {username}
            </NavLink>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "notactive")} onClick={logout} style={{ textDecoration: "none", color: "inherit" }}>
              Logout
            </NavLink>
          </>
        ) : (
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "notactive")} id="auth-link" style={{color:'inherit'}}>
            <FontAwesomeIcon icon={faUser}  style={{color:'inherit'}}/> Login
          </NavLink>
        )}

        <Link to="/cart" className="cart" style={{color:'inherit'}}>
          <FontAwesomeIcon icon={faShoppingCart} style={{fontSize:'20px'}} />
          {cartNumber > 0 && <span className="cart-badge">{cartNumber}</span>}
        </Link>
          
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} style={{color:'#fff'}} />
      </div>
      </div>
    </div>
  );
}

export default Navbar;

