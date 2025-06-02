import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaXTwitter, FaTiktok } from "react-icons/fa6";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Shop</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <div className="socials">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FaXTwitter/></a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
      </div>
      <p style={{color:'#666'}}>&copy; {new Date().getFullYear()} TEO Cakes. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
