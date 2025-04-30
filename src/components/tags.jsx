import React, { useEffect } from 'react'
import api from '../api'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import imageUrl from '../imageurl'
import '../styles/blog.css'
import { Link } from 'react-router-dom'
import Footer from './footer'
import Spinner from './spinner'
function Tags() {
  const[loading,setLoading] = useState()
  const {tag} =useParams()
  const [tagposts,setTagposts] = useState([])
  useEffect(()=>{
    const fetchTags = async()=>{
      try{
        setLoading(true)
        const response = await api.get(`postsbytags/tag/${tag}/`)
        setLoading(false)
        console.log(response.data)
        setTagposts(response.data)
      }
      catch(error){
        console.log(error)
        setLoading(false)
      }
    }
    fetchTags()
  },[tag])

  if(loading){
     return(
      <Spinner/>
     )
  }
  return (
    <>
    <div className='blog'>
      <h1>Tags</h1>
    <section className='blogposts-holder'>
                {tagposts.map((post) => (
                    <Link key={post.id} to={`/content/${post.slug}`} style={{color:'inherit'}}>
                    <article className='blogpost'>
                        <img src={`${imageUrl}${post.image}`} alt={post.title} />
                        <p>{post.category}</p>
                        <h4>{post.title}</h4>
                        <p>{post.excerpt}</p>
                    </article>
                    </Link>
                ))}
            </section>
    </div>
    <Footer/>
    </>
  )
}

export default Tags
