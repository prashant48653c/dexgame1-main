import React from 'react'
import chat from '../assets/chat.svg'
import { setUserData } from '../slices/authslicer'
import { useSelector } from 'react-redux'
import gameimg from '../assets/gameimg.png'

const Navbar = () => {
const {userData}=useSelector(state=>state.auths)
console.log(userData)

if(userData){
  return (
    <nav className='nav'>

      <div className="search-bar">
        <img src={chat} alt="" className="search-icon" />
        <input type="text" className="search-game" placeholder='Search for any games' />
       
      </div>
{
      
      userData[0].user.photoURL ? <img src={userData[0].user.photoURL} alt="profile" className="avatar" />
      :  <img src={gameimg} alt="profile" className="avatar" />
}



    </nav>
  ) }
} 

export default Navbar