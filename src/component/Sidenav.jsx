import React,{useState} from 'react'
import chat from '../assets/chat.svg'
import { useNavigate } from 'react-router-dom'

const Sidenav = () => {
 const navigate=useNavigate();

const [activebtn, setactivebtn] = useState(0)
const handleButtonClick = (buttonIndex) => {
  setactivebtn(buttonIndex);
};

  return (
    <aside className='sidenav' >


<div className={`side-icons  ${activebtn === 0 ? "active":""}`  }  onClick={() => handleButtonClick(0)}  >

 <img className={` side-icon `} onClick={()=>navigate("/login")}  src={chat} alt="community"  />

</div>

<div className={`side-icons  ${activebtn === 1 ? "active":""}` }   onClick={() => handleButtonClick(1)}>
    <img className='side-icon ' onClick={()=>navigate("/signup")}  src={chat} alt="community" /> 

</div>

<div className={`side-icons  ${activebtn === 2 ? "active":""}` }   onClick={() => handleButtonClick(2)}>
  <img className='side-icon  ' onClick={()=>navigate("/create")}  src={chat} alt="store" /> 


</div>

<div className={`side-icons  ${activebtn === 3 ? "active":""}` }   onClick={() => handleButtonClick(3)}>
  <img className='side-icon' onClick={()=>navigate("/profile")}  src={chat} alt="community" /> 


</div>
    </aside>
  )
}

export default Sidenav