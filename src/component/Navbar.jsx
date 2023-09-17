import React from 'react'
import chat from '../assets/chat.svg'
import { setUserData } from '../slices/authslicer'
import { setSearchedKey } from '../slices/feedslicer'
import { useDispatch, useSelector } from 'react-redux'
import gameimg from '../assets/gameimg.png'

const Navbar = () => {
  const dispatch=useDispatch()
const {userData}=useSelector(state=>state.auths)
const {searchedKey}=useSelector(state=>state.feeds)

console.log(userData)


const handleChange=async (e)=>{
  const search_query= await e.target.value;
  dispatch(setSearchedKey(search_query))
  // console.log(searchedKey)
  // console.log(e.target.value)
}

if(true){
  return (
    <nav className='nav'>

      <div className="search-bar">
        <img src={chat} alt="" className="search-icon" />
        <input type="text"  onChange={handleChange} className="search-game" placeholder='Search for any games' />
       
      </div>

      
      {userData === false ? (
  <img src={gameimg} alt="profile" className="avatar" />
) : (
  userData && userData[0] && userData[0].user ? (
    <img src={userData[0].user.photoURL} alt="profile" className="avatar"  />
  ) : (
  <img src={"https://i.pinimg.com/736x/92/63/62/9263620cd2b6d9488c58cf9150e770fe.jpg"} alt="profile" className="avatar" />
     
  )
)}

      




    </nav>
  ) }
} 

export default Navbar