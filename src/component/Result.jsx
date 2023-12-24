import React, { useEffect } from 'react'
import { setSearchedKey } from '../slices/feedslicer'
import { setGameID, setGames, setSearchResult } from '../slices/feedslicer'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
const Result = () => {
  const dispatch = useDispatch()
  const { searchResult } = useSelector(state => state.feeds)
  console.log(searchResult)
  const navigate=useNavigate()
  
const navigateTo=(results)=>{
  console.log(results.id)
    dispatch(setGameID(results.id))
    navigate("/downloader")
}

  if (searchResult) {
    return (
      <>
        {
          searchResult.map((results, i) => {
            return (
              <div className="result-game" key={i}>
                <div>
                <img width={350} height={200} src= {results.background_image} alt="" />

                </div>
                <div>
                  <h3>{results.name}</h3>
                  <p style={{
                    maxWidth:"50%",
                    padding:"1rem 0"
                  }}>We would like to bring to your attention the possibility that the game content you are currently viewing may not be an official release but rather a fan-made creation</p>
                  <button onClick={() => navigateTo(results)} style={{
                    margin:"1rem 0",
                    border:"1px solid black",
                    padding:".5rem 1rem",
                    cursor:"pointer"
                  }}>Download Game </button>
                   
                </div>
              </div>
            )

          })
        }



      </>
    )
  } else {
    <h1>Loading</h1>
  }
}

export default Result