import { Link } from "react-router-dom";
import "../styles/notfound.css"; // Create styles for this page

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="back-home">Go Back Home</Link>
    </div>
  );
}

export default NotFound;
