import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config';

const Createaccount = () => {
   

   const [email,setEmail]=useState([]);
   const [pass,setPass]=useState([]);
 
 
 const navigate=useNavigate();
 const dispatch=useDispatch()
 const {userData}=useSelector(state=>state.auths)
 
 
 const handleSignUp=()=>{
   createUserWithEmailAndPassword(auth,email,pass).then((data)=>{
   console.log(data)
   const newdata=JSON.stringify(data)
     
      localStorage.setItem("data",newdata)
    navigate("/")

 })
 }


  return (
    <section className='create-account'>
<h3>Signup</h3>
<div>
   <p>What’s your email address?</p>
   <input  placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} type="text" />
</div>

<div>
   <p>Create a password</p>
   <input placeholder='Create password' onChange={(e)=>setPass(e.target.value)} type="password" />
</div>

<div>
   <p>What should we call you?</p>
   <input placeholder='Enter your name' type="text" />
</div>

<button onClick={handleSignUp} >Signup</button>

    </section>
  )
}

export default Createaccount