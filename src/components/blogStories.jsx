import { useEffect,useState } from "react"
import api from "../api"
import { Link } from "react-router-dom"
import '../styles/blogstories.css'
import imageUrl from "../imageurl"
import Blogskeleton from "./blogskeleton"
//import {motion as Motion} from 'framer-motion'
function BlogStories(){
   const [homeposts,setHomeposts] = useState([])
   const [ error,setError] = useState(null)
   const [ loading,setLoading] = useState()

   useEffect(() => {
    const fetchLatestCakes = async () => {
      setLoading(true);
      try {
        const response = await api.get("homepost");
        console.log("homeposts Data:", response.data);
        setHomeposts(response.data);
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
    <section className="homeblog">
      <h3 style={{textAlign:'center'}}>Latest Blog</h3>
      <p style={{textAlign:'center'}}>Dive into our blog for a mix of baking tips, behind-the-scenes moments, and cake stories that inspire. There’s always something fresh from the oven to read</p>
      <p>{error}</p>
      {loading?(<Blogskeleton/>):(
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
    </div>)}
    </section>
  )
}
export default BlogStories
