import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import api from '../api'
import '../styles/blogcontent.css'
function Comments({blogdetail}) {
  

    const [commentData,setCommentData]= useState({
        name:'',
        email:'',
        comment:'',
        
        
    })
    const [statusMessage,setStatusMessage] =useState('')

    const handleChange = (e) => {
        setCommentData({ ...commentData, [e.target.name]: e.target.value });
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
            const response  =  await api.post('comments/', {
                ...commentData,
                post: blogdetail.id
                
              });
              
          setStatusMessage(response.data.message);
          toast.success('Comment sent successfully');
          setCommentData({ name: "", email: "", comment: "" });
        } catch (error) {
          setStatusMessage("Error sending comment. Please try again.");
          console.error("Error:", error.response?.data || error.message);
        }
      };
      
  return (
    <div className='comments'>
      <h2>Comments</h2>
      {statusMessage && <p style={{ color: 'green',fontSize:'14px' }}>{statusMessage}</p>}
      <form onSubmit={handleSubmit}>
       <div className='inputs'>
       <input 
       name='name'
       type="text" 
       placeholder='Name' 
       value={commentData.name}
       required
       onChange={handleChange}
       />

       <input 
       name='email'
       type="email"
       placeholder='Email Address'
       value={commentData.email}
       required 
       onChange={handleChange}
       />
       </div>

       <textarea 
       name="comment" 
       placeholder='Comment' 
       style={{height:'6rem'}}
       value={commentData.comment}
       required
       onChange={handleChange}
       ></textarea>
       <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Comments
