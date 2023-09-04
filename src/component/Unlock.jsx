import chat from '../assets/chat.svg'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Unlock = () => {
  const navigate=useNavigate()

  return (
    <>

    <section className="unlock">
<img src={chat} alt="" />
<p>"Unlock Your Profile World! 🌟 Sign up to Explore"</p>
<button onClick={()=>navigate("/signup")} >Sign up</button>
    </section>
   


    </>
  )
}

export default Unlock