import React, { useEffect } from 'react'
import { setSearchedKey } from '../slices/feedslicer'
import { setGameID, setGames,setSearchResult } from '../slices/feedslicer'
import { useDispatch, useSelector } from 'react-redux'

const Result = () => {
   const dispatch=useDispatch()
   const {searchResult}=useSelector(state => state.feeds)
   console.log(searchResult)
   
    
   if(searchResult){
  return (
    <>
{
  searchResult.map((results,i)=>{
    return (
<div className="result-game" key={i}>
      {results.slug}{results.id}
    </div>
  )
    
  })
}



    </>
  )
   }else{
    <h1>Loading</h1>
   }
}

export default Result