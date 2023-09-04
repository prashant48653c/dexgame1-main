import React, { useEffect } from 'react'
import gameimg from '../assets/gameimg.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
const {userData}=useSelector(state=>state.auths)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
console.log(userData)
 
if(userData){
  return (
    <>
<main className="main-container">
<main className="profile">

<section className="profile-cover-container">
<img src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg" alt="" /> 
<div className="user-detail">
<div className="user-info">
<img src={userData[0].user.photoURL  ? userData[0].user.photoURL : gameimg }  alt="" />
<div>
  <h3>{ userData[0].user.displayName ? (userData[0].user.displayName).toUpperCase()  : "Username"}</h3>
<p>{userData[0].user.email}</p>

</div>

</div>
<button onClick={()=>navigate("/editor")} >Edit Profile</button>


</div>

</section>


<section className="user-activity-container">
<article className='history-archieved' >
<div>Archieved</div>
<div>History</div>

</article>
<hr />

</section>

</main>
</main>
    </>
  )
}}

export default Profile