import { useEffect,useState } from "react"
import api from "../api"
import imageUrl from "../imageurl"
import { Link } from "react-router-dom"
import '../styles/bestselling.css'

function Bestselling(){
  const [sellingCakes,setsellingCakes] = useState([])
   const [ error,setError] = useState(null)
   //const [ loading,setLoading] = useState()

   useEffect(() => {
    const fetchsellingCakes = async () => {
      try {
        const response = await api.get("bestselling");
        console.log("sellingcakes Data:", response.data);
        setsellingCakes(response.data);
      } catch (error) {
        console.log(error)
        setError(error.message||"failed to fetch cakes");
      }
      finally {
     //   setLoading(false);
      }
    };

    fetchsellingCakes();
  }, []);
    return(
         <section className="bestselling">
      <h3>Our Best Seling Cakes</h3>
      {error && <p>{error}</p>}
      <p style={{textAlign:'center'}}>look through our best selling cakes, you my find one that suits your ceremony</p>
    <div className="sellingcakes">
          {sellingCakes.map((cake) => (
            <Link to={`/cake-detail/${cake.slug}`} key={cake.id} style={{color:'inherit'}}><div className="menu-item">
              <div className="menu-image"><img src={`${imageUrl}${cake.image}`} alt={cake.name}/></div>
              <h3 style={{textDecoration:'none',color:'inherit'}}>{cake.name}</h3>
              <p>${cake.price}</p>
              
            </div></Link>
          ))}
        </div>
    </section>
    )
}
export default Bestselling