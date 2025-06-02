import { useEffect,useState } from "react"
import api from "../api"
import { Link } from "react-router-dom"
import '../styles/blogstories.css'
import imageUrl from "../imageurl"
//import {motion as Motion} from 'framer-motion'
function BlogStories(){
   const [homeposts,setHomeposts] = useState([])
   const [ error,setError] = useState(null)
   //const [ loading,setLoading] = useState()

   useEffect(() => {
    const fetchLatestCakes = async () => {
      try {
        const response = await api.get("homepost");
        console.log("homeposts Data:", response.data);
        setHomeposts(response.data);
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
    <section className="homeblog">
      <h3>Our Latest Addition</h3>
      <p style={{textAlign:'center'}}>Read throught our latest blogs with fascinating stories </p>
      <p>{error}</p>
    <div className="homepost">
           {homeposts.map((post) => (
                    <article key={post.id}
                        style={{backgroundImage:`url(${imageUrl}${post.image})`}}>
                      <div className="backdrop">
                        <h4>{post.excerpt}</h4>
                        <Link to={`/content/${post.slug}`} style={{color:'inherit'}}>
                        <button>READ MORE</button>
                        
                        </Link>
                      </div>
                    </article>
                    
                ))}
    </div>
    </section>
  )
}
export default BlogStories