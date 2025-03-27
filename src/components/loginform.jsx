import React, { useContext, useState } from "react";
import "../styles/loginform.css";
import api from "../api";
import ErrorComponent from "./ErrorComponent";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "./spinner";
import { AuthContext } from "../Context/authContext";
import { toast } from "react-toastify";
const Loginform = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false)
  const  [error , setError] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const {setIsAuthenticated,getUsername} = useContext(AuthContext)
  const [formData, setFormData] = useState({
   
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     const loginInfo = {
      username : formData.username,
      password : formData.password,
      email:formData.email
    }
    setLoading(true)
    try {
      if (isLogin) {
         const response = await api.post('token/',loginInfo);
        console.log(response.data)
        localStorage.setItem('access',response.data.access)
        localStorage.setItem('refresh',response.data.access)
        formData.username=''
        formData.password=''
        formData.email =''
        setLoading(false)
        setIsAuthenticated(true)
        getUsername()
        setError('')
       toast.success('you are logged in')
        const from = location.state?.from?.pathname || '/'
        navigate (from,{replace:true})
      } else{
        const response = await api.post('register/', loginInfo)
        console.log(response.data.message)
        toast.success('Account registered successfully')
        setIsLogin(true)
        setLoading(false)
      }
      }
     catch (error) {
      console.error( error);
      alert(error.response?.data?.error || "Network error")
      setLoading(false)
      setError(error.message)
    }
  };
  if(loading){
    return(
      <Spinner/>
    )
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
      {error && <ErrorComponent/>}
         <h1 style={{color:'#ff7f50'}}>{isLogin? "Welcome Back": "Create your account"}</h1>
        <form onSubmit={handleSubmit}>
          
            <div className="input-group">
              <label>Username</label>
              <input type="text" name="username" placeholder="Enter your username" value={formData.username} onChange={handleChange} />
            </div>
          

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
          </div>

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>

          <button style={{backgroundColor:'#ff7f50'}} type="submit" className="auth-button" >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="switch-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"} 
          <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(!isLogin); }}>
            {isLogin ? "Sign Up" : "Login"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Loginform;
