import { useEffect,useState } from "react"
import api from "../api"
import imageUrl from "../imageurl"
import { Link } from "react-router-dom"
import '../styles/latest.css'
function Latest(){
   const [latestCakes,setLatestCakes] = useState([])
   const [ error,setError] = useState(null)
   //const [ loading,setLoading] = useState()

   useEffect(() => {
    const fetchLatestCakes = async () => {
      try {
        const response = await api.get("latest");
        console.log("latestcakes Data:", response.data);
        setLatestCakes(response.data);
      } catch (error) {
        console.log(error)
        setError(error.message||"failed to fetch cakes");
      }
      finally {
     //   setLoading(false);
      }
    };

    fetchLatestCakes();
  }, []);
  return(
    <section className="latest">
      <h3>LATEST ADDITION</h3>
      {error&&<p>{error}</p>}
      <p>Explore our latest cake additions—freshly baked, beautifully crafted, and full of flavor. Perfect for any celebration or sweet moment</p>
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
        </div>
    </section>
  )
}
export default Latest