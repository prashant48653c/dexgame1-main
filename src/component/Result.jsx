import React, { useEffect } from 'react'
import { setSearchedKey } from '../slices/feedslicer'
import { setGameID, setGames,setSearchResult ,setSearchedKey} from '../slices/feedslicer'
import { useDispatch, useSelector } from 'react-redux'

const Result = () => {
    useEffect(()=>{
        fetchData(`games?&search=${setSearchedKey}`).then((res)=>{
            console.log(res,"")
           
          })
      
    })
  return (
    <>



    </>
  )
}

export default Result