import React, { useState } from 'react'
import chat from '../assets/chat.svg'
import { setUserData } from '../slices/authslicer'
import { setSearchResult, setSearchedKey } from '../slices/feedslicer'
import { useDispatch, useSelector } from 'react-redux'
import gameimg from '../assets/gameimg.png'
import { fetchData } from '../fetched/fetch'
import { useNavigate } from 'react-router-dom'
import Option from './Option'


const Navbar = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const { userData } = useSelector(state => state.auths)
  const { games, gameID, searchResult, searchedKey } = useSelector((state) => state.feeds)

const [showOption, setshowOption] = useState(false)
  // console.log(userData)

const handleProfile=()=>{
  showOption ?
  setshowOption(false)
  : setshowOption(true)
}
 
  
  const handleClick=(e)=>{
    if(e.key == 'Enter'){
      const searchText =  e.target.value;

      //  dispatch(setSearchedKey(searchText))
      fetchData(`games?&search=${searchText}`).then((res) => {
        dispatch(setSearchResult(res.results))
      console.log("click")
      })
      navigate("/result")
    }
  }


    return (
      <nav className='nav'>

        <div className="search-bar">
          <img src={chat} alt="" className="search-icon" />
          <input type="text"   onKeyDown={handleClick} className="search-game" placeholder='Search for any games' />

        </div>

          <div>
         {
          (userData && userData[0] && userData[0].user) ? (
            <img src={userData[0].user.photoURL} alt="profile" className="avatar" onClick={handleProfile} />
          ) : (
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"} alt="profile" className="avatar" />

          )
        }
        {
          showOption ? <Option/> : " "
        }

          </div>
      





      </nav>
    )
  
}

export default Navbar