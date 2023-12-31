import gameimg from '../assets/gameimg.png'
import chat from '../assets/chat.svg'
import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { fetchData } from '../fetched/fetch'
import { setGameID } from '../slices/feedslicer'
import { setGameSeries } from '../slices/downloaderslicer'
import { useNavigate } from 'react-router-dom'

const Store = () => {

 
  const dispatch=useDispatch()
  const {games ,gameID}=useSelector(state => state.feeds)
const {gameSeries}=useSelector(state => state.downloaders)
//  console.log(gameSeries)

const navigate = useNavigate()

const navigateToDownloader = (game) => {
 
console.log(game.id)
dispatch(setGameID(game.id))
navigate("/downloader")
}



 useEffect(()=>{
  fetchData(`games/${gameID || 5286 }/game-series`).then((res)=>{

    dispatch(setGameSeries(res.results))
    // console.log(res)

})
 },[dispatch])
  

  if(gameSeries && games){

  return (
    <>
 <div className="main-container ">
<div className='div-slide' >
{
  games.length === 0 ? ( <p>Not found</p> ):
  (
    games.map((game,i)=>{
     
      return(
        <div id='img-container'>
      <img src={game.background_image} key={i} alt="game_img" className="slideing-img" />
<div className="img-data">
  <h2>GTA</h2>
  <p>Step into the hauntingly beautiful world of Limbo, where darkness and puzzles intertwine, challenging your mind in a captivating black-and-white platforming experience.</p>
  <button onClick={(e)=>navigateToDownloader(e,game)} > Download Now</button>
</div>

        </div>
    
      )
    })
  )
}
 
</div>



  <section className="favorite-games">
    <h3>Top Favorites</h3>
    <span className="slide-icons">
        <img src={chat} alt="" className="slide-icon" />
        <img src={chat} alt="" className="slide-icon" />

    </span>
  </section>

  <section className="favorite-game">
  {
  games.length === 0 ? ( <p>Not found</p> ):
  (
    games.slice(8).map((game,i)=>{
     
      return(
        <article onClick={()=>navigateToDownloader(game)}  className="fav-game">
       <img src={game.background_image} alt="" className="fav-img" />
       <div>
       <p>#1 Top 2015</p>
       <h3>{game.name} </h3>
       <p className="genre">Action,Adventure</p>
       </div>
      
    </article>
    
      )
    })
  )
}
   

   
  </section>

  <section className="suggested-game-container suggested-store">
  <div className='heading'>  
  
    <h2 className="suggested-title">Most Downloaded</h2>
  </div>

<article className="suggested-games ">


{
  games.length === 0 ? ( <p>Not found</p> ):
  (
    games.slice(7).map((game,i)=>{
     
      return(
        <div onClick={()=>navigateToDownloader(game)}  className="suggested-game">
        <img src={game.background_image} alt="" className="suggested-game-img" />
        <div>
        <h3>{game.name}</h3>
        <p className="description">Unleash your criminal ambitions and dominate the streets of Los Santos in the action-packed GTA 5.</p>
        </div>
        </div>
        
    
      )
    })
  )
}



  </article>
</section>






  <section className="suggested-game-container foryou">
  <div className='heading'>  
    <img src={chat} id='suggested-icon' alt="" />
    <h2 className="suggested-title">Games just for you</h2>
  </div>

<article className="suggested-games">


{
  games.length === 0 ? ( <p>Not found</p> ):
  (
    games.map((game,i)=>{
     
      return(
        <div key={i} className="suggested-game">
        <img src={game.background_image} alt="" className="suggested-game-img" />
        <h3>{game.name}</h3>
        <p>Action,Adventure</p>
        <button >Download and Play</button>
        </div>
        
    
      )
    })
  )
}





  </article>
</section>





<section className="dev-games">
<h2>Find Games By Developers</h2>

 
<div id='game-list'>


<article className="dev-info">

    <img src={gameimg} alt="" className="dev-logo" />
    <div className="dev-game">

{
  gameSeries.slice(0,2).map((game,i)=>{
   
    return(
      <div onClick={()=>navigateToDownloader(game)} className="dev-game1" key={i} >
      <img src={game.background_image} alt="" />
      <h3> {game.name}</h3>
  </div>
    )
  })
}
       

        
        
    </div>
</article>


<article className="dev-info">

    <img src={gameimg} alt="" className="dev-logo" />
    <div className="dev-game">

{
  gameSeries.slice(4,6).map((game,i)=>{
    return(
      <div onClick={()=>navigateToDownloader(game)} className="dev-game1" key={i} >
      <img src={game.background_image} alt="" />
      <h3> {game.name}</h3>
  </div>
    )
  })
}
       

        
        
    </div>
</article>



<article className="dev-info">

    <img src={gameimg} alt="" className="dev-logo" />
    <div className="dev-game">

{
  gameSeries.slice(8,13).map((game,i)=>{
    return(
      <div onClick={(e)=>navigateToDownloader(game)} className="dev-game1" key={i} >
      <img src={game.background_image} alt="" />
      <h3> {game.name}</h3>
  </div>
    )
  })
}
       

        
        
    </div>
</article>

</div>


</section>

    </div>


    
    </>
  )
}
}

export default Store