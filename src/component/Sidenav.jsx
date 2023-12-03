import React, { useState } from 'react'
import chat from '../assets/chat.svg'
import log from '../assets/log.svg'
import { HiHome, HiOutlineChatAlt2 } from 'react-icons/hi'
import { IoStorefrontOutline } from 'react-icons/io5'
import { VscAccount } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


const Sidenav = () => {
  const navigate = useNavigate();

  const { userData } = useSelector(state => state.auths)
  const [activebtn, setactivebtn] = useState(0)
  const handleButtonClick = (buttonIndex) => {
    setactivebtn(buttonIndex);
  };

  return (
    <aside className='side-section' >

      <section className="sidenav">
        <div className="dex-logo">
          <img src={log} alt="" />
        </div>


        <div className={`  ${activebtn === 0 ? "active" : "side-icons"}`} onClick={() => handleButtonClick(0)}  >
          {
            activebtn === 0 ?

              <HiHome size={30} color='white' className={` side-icon `} onClick={() => navigate("/")} src={chat} alt="feed" />
              :
              <HiHome size={30} className={` side-icon `} onClick={() => navigate("/")} src={chat} alt="feed" />

          }
        </div>

        <div className={`  ${activebtn === 1 ? "active" : "side-icons"}`} onClick={() => handleButtonClick(1)}>
          {
            activebtn === 1 ?

              <HiOutlineChatAlt2 size={30} color='white' className='side-icon ' onClick={() => navigate("/community")} src={chat} alt="community" /> :

              <HiOutlineChatAlt2 size={30} className='side-icon ' onClick={() => navigate("/community")} src={chat} alt="community" />

          }
        </div>

        <div className={`  ${activebtn === 2 ? "active" : "side-icons"}`} onClick={() => handleButtonClick(2)}>

          {
            activebtn === 2 ?
              <IoStorefrontOutline size={30} color='white' className='side-icon  ' onClick={() => navigate("/store")} src={chat} alt="store" />
              :
              <IoStorefrontOutline size={30} className='side-icon  ' onClick={() => navigate("/store")} src={chat} alt="store" />
          }



        </div>

        <div className={` ${activebtn === 3 ? "active" : "side-icons "}`} onClick={() => handleButtonClick(3)}>
          {
            activebtn === 3 ?


              userData ? (
                <VscAccount size={30} className='side-icon' onClick={() => navigate("/profile")} src={chat} alt="profile" />

              ) :
                <VscAccount size={30} className='side-icon' onClick={() => navigate("/unlock")} src={chat} alt="profile" />


              :

              userData ? (
                <VscAccount size={30} className='side-icon' onClick={() => navigate("/profile")} src={chat} alt="profile" />

              ) :
                <VscAccount size={30} className='side-icon' onClick={() => navigate("/unlock")} src={chat} alt="profile" />


          }


        </div>

      </section>
    </aside>
  )
}

export default Sidenav