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
      <h3>Our Latest Addition</h3>
      {error&&<p>{error}</p>}
      <p>Our latest addition are fresh and available to you at affordable prices join the party and get one for your self</p>
    <div className="latest-grid">
          {latestCakes.map((cake) => (
            <Link to={`/cake-detail/${cake.slug}`} key={cake.id} style={{color:'inherit'}}>
              <div className="latest-item">
              <div className="menu-image">
               <img src={`${imageUrl}${cake.image}`} alt={cake.name}/>
              </div>
              <h3 style={{textDecoration:'none',color:'inherit'}}>{cake.name}</h3>
              <p>${cake.price}</p>
              
            </div></Link>
          ))}
        </div>
    </section>
  )
}
export default Latest