import { useEffect,useState } from "react"
import api from "../api"
import imageUrl from "../imageurl"
import { Link } from "react-router-dom"
import '../styles/bestselling.css'
import Bestskeleton from "./bestskeleton"
import '../styles/skeleton.css'
function Bestselling(){
  const [sellingCakes,setsellingCakes] = useState([])
   const [ error,setError] = useState(null)
   const [ loading,setLoading] = useState()

   useEffect(() => {
    const fetchsellingCakes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get("bestselling");
        console.log("sellingcakes Data:", response.data);
        setsellingCakes(response.data);
      } catch (error) {
        console.log(error)
        setError(error.message||"failed to fetch cakes");
      }
      finally {
        setLoading(false);
      }
    };

    fetchsellingCakes();
  }, []);
    return(
         <section className="bestselling">
      <h3 style={{textAlign:'center'}}>Best Sellers</h3>
      
      <p style={{textAlign:'center'}}>These customer favorites have earned their place at the top.Tested, and loved by many</p>
      {error&&<p style={{color:'red'}}>{error}</p>}
      {error&&<Bestskeleton/>}
      {loading?(<Bestskeleton/>):(
    <div className="sellingcakes">
          {sellingCakes.map((cake) => (
            <Link to={`/cake-detail/${cake.slug}`} key={cake.id} style={{color:'inherit'}}><div className="menu-item">
              <div className="menu-image"><img src={`${imageUrl}${cake.image}`} alt={cake.name}/></div>
              <p style={{textDecoration:'none',color:'inherit',marginTop:'0.7rem'}}>{cake.name}</p>
              <p>${cake.price}</p>
              
            </div></Link>
          ))}
        </div>)}
    </section>
    )
}
export default Bestselling
