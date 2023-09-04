import React, { useState } from 'react'
import { Provider,auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

const Login = () => {
  const [email,setEmail]=useState([]);
  const [pass,setPass]=useState([]);


const navigate=useNavigate();
const dispatch=useDispatch()
const {userData}=useSelector(state=>state.auths)


const handleSignUp= async ()=>{
signInWithEmailAndPassword(auth,email,pass).then((data)=>{
  console.log(data)
  const newdata=JSON.stringify(data)
     
  localStorage.setItem("data",newdata)
navigate("/")
})
}
  return (
    <section className='login-page'>
<h3>Login</h3>
<div>
    <p>Email</p>
    <input placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} type="email" />

</div>

<div>
    <p>Password</p>
    <input placeholder='Enter your password' onChange={(e)=>setPass(e.target.value)} type="password" />
    
</div>

<button onClick={handleSignUp} >Login</button>
    </section>
  )
}

export default Login