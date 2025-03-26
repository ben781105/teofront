import "../styles/error.css";

function ErrorComponent({ message }) {
  return (
    <div className="error-message">
      <p>{message || "We couldn't load the data. Please try again later."}</p>
    </div>
  );
}

export default ErrorComponent;
