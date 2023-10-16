import chat from '../assets/chat.svg'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import illustration from '../assets/illustration.svg'
const Unlock = () => {
  const navigate=useNavigate()

  return (
    <>

    <section className="unlock">
<img src={illustration} alt="" />
<p>"Unlock Your Profile World! 🌟 Sign up to Explore"</p>
<button onClick={()=>navigate("/signup")} >Sign up</button>
    </section>
   


    </>
  )
}

export default Unlock