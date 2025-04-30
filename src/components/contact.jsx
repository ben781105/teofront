import React from 'react'
import '../styles/contact.css'
import { useState } from 'react'
import api from '../api'
import '../styles/navbar.css'
import Footer from './footer'
import { toast } from 'react-toastify'
function Contact() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('contact/', formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        
      })
      setStatusMessage(response.data.message);
      toast.success('Message sent successfully')
      setFormData({ first_name: "", last_name: "", email: "",phone: "", subject: "", message: "" })
      
    } catch (error) {
      setStatusMessage("Error sending message. Please try again.");
      console.error("Error:", error.response?.data.message || error.message);
    }
    }
  
  return (
    <>
    <div className='contact-page'>
      
      <h1>Contact</h1>
            <div className='contact-main'>
          <div className='user-info'>
            <h2 style={{color:'#f88c91'}}>Get in touch</h2>
            <p>We would love to hear from you! Fill out the form below with your
               name, email, phone number, and message, and we will get
                back to you as soon as possible."</p>
                {statusMessage && <p style={{ color: 'green',fontSize:'14px' }}>{statusMessage}</p>}
            <form onSubmit={handleSubmit}>
              <div>
                <input type="text" name='first_name'placeholder='FIRST NAME'value={formData.first_name} required onChange={handleChange}/>
                <input type="text" name='last_name'placeholder='LAST NAME' value={formData.last_name} required onChange={handleChange}/>
                <input type="email" name='email'placeholder='EMAIL'value={formData.email} required onChange={handleChange}/>
                <input type="text" name='phone' placeholder='PHONE' value={formData.phone} required onChange={handleChange}/>
              </div>
              <input type="text" name='subject' placeholder='SUBJECT' value={formData.subject} required onChange={handleChange} />
              <textarea placeholder='YOUR MESSAGE' name='message' value={formData.message} required onChange={handleChange}></textarea>
              <button type='submit'>SEND MESSAGE</button>
            </form>
        </div>
        <div className='contact-details'>
          <div className='address-info'>
            <span>
              <h3 style={{color:'#f88c91'}}>Address info</h3>
              <p style={{fontWeight:400}}>1905A, Entebbe Town<br></br>
                Katabi Busambaga<br></br>
                Uganda</p>
            </span>
            <span>
              <h3 style={{color:'#f88c91'}}>Contact info</h3>
              <p style={{fontWeight:400}}>(1-800-23-456-7890)<br></br>
                info@domain.com<br></br>
                Teocakes@gmail.com</p>
            </span>
          </div>
          <div className='map-container'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2372.357700207795!2d32.47326391342321!3d0.08262641951425612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sug!4v1741764134766!5m2!1ses!2sug" 
          width="600" 
          height="450" 
          style={{border:0}} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
       </div>
       
    </div>
    <Footer/>
    </>
  )
}

export default Contact
