import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",    
    height: "100vh",           
};

function Spinner({ loading }) {
  return (
    <div style={override}>
      <ClipLoader
        loading={loading}
        size={80} 
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
