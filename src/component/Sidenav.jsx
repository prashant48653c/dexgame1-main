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
    <aside className='side-section' >

<section className="sidenav">


<div className={`  ${activebtn === 0 ? "active":"side-icons"}`  }  onClick={() => handleButtonClick(0)}  >

 <img className={` side-icon `} onClick={()=>navigate("/")}  src={chat} alt="feed"  />

</div>

<div className={`  ${activebtn === 1 ? "active":"side-icons"}` }   onClick={() => handleButtonClick(1)}>
    <img className='side-icon ' onClick={()=>navigate("/community")}  src={chat} alt="community" /> 

</div>

<div className={`  ${activebtn === 2 ? "active":"side-icons"}` }   onClick={() => handleButtonClick(2)}>
  <img className='side-icon  ' onClick={()=>navigate("/store")}  src={chat} alt="store" /> 


</div>

<div className={` ${activebtn === 3 ? "active":"side-icons "}` }   onClick={() => handleButtonClick(3)}>
  {
    userData ? (
      <img className='side-icon' onClick={()=>navigate("/profile")}  src={chat} alt="profile" /> 

    ): 
    <img className='side-icon' onClick={()=>navigate("/unlock")}  src={chat} alt="profile" /> 
    
  }


</div>

</section>
    </aside>
  )
}

export default Sidenav