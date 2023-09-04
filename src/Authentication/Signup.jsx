import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Provider,auth } from '../firebase/config'
import { signInWithPopup } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../slices/authslicer'





const Signup = () => {
  const dispatch=useDispatch()
  // const {userData}=useSelector(state=>state.auths)
 
  const navigate=useNavigate();

  const handleGoogleClick= async ()=>{
    signInWithPopup(auth,Provider).then((data)=>{
      console.log(data)
      const newdata=JSON.stringify(data)
     
      localStorage.setItem("data",newdata)
    navigate("/")

      
    })
  }

  

  return (
    <>

    <section className="signup-box">
        <h3>Signup to continue</h3>
        <button onClick={()=>navigate("/create")}  >Signup with email</button>
        <button onClick={handleGoogleClick} >Signup with Google</button>
<div className="box">
    <p>Already signed up?</p>
    <Link id='linking' to="/login">Login</Link>
</div>
    </section>


    </>
  )
}

export default Signup