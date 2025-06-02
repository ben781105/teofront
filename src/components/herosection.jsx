import '../styles/herosection.css'
import { useNavigate } from 'react-router-dom'
function Herosection() {
  const navigate = useNavigate()
  const toMenu =()=>{
   navigate('/menu')
  }
  return (
    <div  className='herosection'>
      <h1>CAKE FOR LATER CAKE <br></br>AS A WAY OF LIFE</h1>
      <button onClick={toMenu}>Check menu</button>
    </div>
  )
}

export default Herosection
