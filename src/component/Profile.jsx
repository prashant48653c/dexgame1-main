import React, { useEffect } from 'react'
import gameimg from '../assets/gameimg.png'
import { useDispatch, useSelector } from 'react-redux'


const Profile = () => {
const {userData}=useSelector(state=>state.auths)
  const dispatch=useDispatch()
  
console.log(userData)
 
if(userData){
  return (
    <>
<main className="main-container">
<main className="profile">

<section className="profile-cover-container">
<img src={gameimg} alt="" />
<div className="user-detail">
<div className="user-info">
<img src={userData[0].user.photoURL===false  ? userData[0].user.photoURL : gameimg }  alt="" />
<div>

  <h3>{ userData[0].user.displayName===false ? (userData[0].user.displayName).toUpperCase()  : "Username"}</h3>
<button>user</button>
 


  <p>{userData[0].user.email}</p>
 
</div>



</div>

</div>

</section>


<section className="user-activity-container">
taratara
</section>

</main>
</main>
    </>
  )
}}

export default Profile