import { useEffect,useState } from "react"
import api from "../api"
import imageUrl from "../imageurl"
import { Link } from "react-router-dom"
import '../styles/latest.css'
import Homeskeleton from "./homeskeleton"

function Latest(){
   const [latestCakes,setLatestCakes] = useState([])
   const [ error,setError] = useState(null)
   const [ loading,setLoading] = useState(false)

   useEffect(() => {
    const fetchLatestCakes = async () => {
      try {
        setLoading(true)
        const response = await api.get("latest");
        console.log("latestcakes Data:", response.data);
        setLatestCakes(response.data);
      } catch (error) {
        console.log(error)
        setError(error.message||"failed to fetch cakes");
      }
      finally {
        setLoading(false);
      }
    };

    fetchLatestCakes();
  }, []);
  return(
    <section className="latest">
      <h3>Latest Addition</h3>
      <p>Explore our latest cake additions beautifully crafted. Perfect for any celebration or sweet moment</p>
       {error&&<p style={{color:'red'}}>{error}</p>}
       {error&&<Homeskeleton/>}
    {loading?(<Homeskeleton/>):(
    <div className="latest-grid">
          {latestCakes.map((cake) => (
            <Link to={`/cake-detail/${cake.slug}`} key={cake.id} style={{color:'inherit'}}>
              <div className="latest-item">
              <div className="menu-image">
               <img src={`${imageUrl}${cake.image}`} alt={cake.name}/>
              </div>
              <p style={{textDecoration:'none',color:'inherit',marginTop:'0.7rem'}}>{cake.name}</p>
              <p>${cake.price}</p>
              
            </div></Link>
          ))}
        </div>)}
    </section>
  )
}
export default Latest
