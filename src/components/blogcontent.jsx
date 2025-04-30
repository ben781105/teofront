import  { useState,useEffect } from 'react'
import api from '../api'
import { useParams } from 'react-router-dom'
import imageUrl from '../imageurl'
import { Link } from 'react-router-dom'
import '../styles/blogcontent.css'
import Footer from './footer'
import Comments from './comments'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaPinterest, FaTwitter, FaWhatsapp } from 'react-icons/fa6'
import Spinner from './spinner'
function Blogcontent() {
    const[blogdetail, setBlogDetails] = useState({})
    const [relatedposts, setRelatedPosts] = useState([])
    const [tags,setTags] = useState([])
    const {slug} =useParams()
    const [loading,setLoading] =useState(false)
    useEffect(()=>{
      const fetchBlogdetail =async()=>{
        try{
          setLoading(true)
           const response = await api.get(`content/${slug}/`)
        
           setLoading(false)
           console.log(response.data)
           setBlogDetails(response.data)
           setRelatedPosts(response.data.related_posts)
           setTags(response.data.tags)
            
        }
        catch(error){
            console.log(error)
            setLoading(false)
        }
      }
      fetchBlogdetail()
    },[slug])

    function decodeHtml(html) {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
      }
      if(loading){
        return(
          <Spinner/>
        )
      }
    const blogUrl = `${import.meta.env.VITE_BASE_URL || 'http://127.0.0.1:8000'}/content/${blogdetail.slug}`;

  return (
    <>
    <main className='blog-content'>
        
        <div className='blog-content-main'>
          <div style={{display:'flex',gap:'1rem',flexDirection:'column',flex:0.8}} className='blogpost'> 
          <section className='blogdetail-wrapper'>
          <h4>{blogdetail.title}</h4>
          <i style={{fontWeight:'300'}}>{blogdetail.category}&nbsp;&nbsp;/&nbsp;&nbsp;{blogdetail.formatted_date}</i>
          <div className='detail-image'><img src={`${imageUrl}${blogdetail.image}`} alt={blogdetail.title} /></div>
          <article dangerouslySetInnerHTML={{ __html: decodeHtml(blogdetail.content) }} />
          </section>
          <div className='socialmedia'>
  <h2>SHARE</h2>
  <div className='share-icons'> 
    <span className="share-btn" style={{ backgroundColor: '#3B5998' }}>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`} target="_blank" rel="noopener noreferrer">
        <FaFacebook /> Facebook
      </a>
    </span>
    <span className="share-btn" style={{ backgroundColor: '#55ACEE' }}>
      <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}&text=${encodeURIComponent(blogdetail.title)}`} target="_blank" rel="noopener noreferrer">
        <FaTwitter /> Twitter
      </a>
    </span>
    <span className="share-btn" style={{ backgroundColor: '#2CB742' }}>
      <a href={`https://wa.me/?text=${encodeURIComponent(blogdetail.title + ' - ' + blogUrl)}`} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp /> WhatsApp
      </a>
    </span>
    <span className="share-btn" style={{ backgroundColor: '#CC2127' }}>
      <a href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(blogUrl)}&description=${encodeURIComponent(blogdetail.title)}`} target="_blank" rel="noopener noreferrer">
        <FaPinterest /> Pinterest
      </a>
    </span>
  </div>
</div>

   </div>
            
             <aside>
                <h4>Tags</h4>
    <div className='tags-grid'>
  {tags.map((tag) => (
    <Link key={tag} to={`/tag/${tag}`} style={{ color: 'inherit' }} className="tag-link">
      <span>{tag}</span>
    </Link>
  ))}
  </div>
</aside>
</div>
<section style={{display:'flex',flexDirection:'column',gap:'1.25rem'}}className='related'>
    <h4 >Related posts</h4>
<div className='relatedpost-wrapper'>
            {relatedposts.map((relatedpost)=>
            
             <Link key={relatedpost.id} to={`/content/${relatedpost.slug}`} style={{color:'inherit'}} className='blogpost'>
             <article>
                 <img src={`${imageUrl}${relatedpost.image}`} alt={relatedpost.title} />
                 <h4>{relatedpost.title}</h4>
                 <p>{relatedpost.excerpt}</p>
             </article>
             </Link>
             
            )}
            </div>
            </section>
            <Comments blogdetail={blogdetail}/>
    </main>
    <Footer/>
    </>
    
  )
}

export default Blogcontent
