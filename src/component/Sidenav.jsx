import React,{useState} from 'react'
import chat from '../assets/chat.svg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Sidenav = () => {
 const navigate=useNavigate();

 const {userData}=useSelector(state=>state.auths)
const [activebtn, setactivebtn] = useState(0)
const handleButtonClick = (buttonIndex) => {
  setactivebtn(buttonIndex);
};

  return (
    <aside className='sidenav' >


<div className={`side-icons  ${activebtn === 0 ? "active":""}`  }  onClick={() => handleButtonClick(0)}  >

 <img className={` side-icon `} onClick={()=>navigate("/")}  src={chat} alt="feed"  />

</div>

<div className={`side-icons  ${activebtn === 1 ? "active":""}` }   onClick={() => handleButtonClick(1)}>
    <img className='side-icon ' onClick={()=>navigate("/community")}  src={chat} alt="community" /> 

</div>

<div className={`side-icons  ${activebtn === 2 ? "active":""}` }   onClick={() => handleButtonClick(2)}>
  <img className='side-icon  ' onClick={()=>navigate("/store")}  src={chat} alt="store" /> 


</div>

<div className={`side-icons  ${activebtn === 3 ? "active":""}` }   onClick={() => handleButtonClick(3)}>
  {
    userData ? (
      <img className='side-icon' onClick={()=>navigate("/profile")}  src={chat} alt="profile" /> 

    ): 
    <img className='side-icon' onClick={()=>navigate("/unlock")}  src={chat} alt="profile" /> 
    
  }


</div>
    </aside>
  )
}

export default Sidenav