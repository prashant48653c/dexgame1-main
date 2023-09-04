import gameimg from '../assets/gameimg.png'
import chat from '../assets/chat.svg'
import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { fetchData } from '../fetched/fetch'
import { setGameID } from '../slices/feedslicer'
import { setGameSeries } from '../slices/downloaderslicer'

const Store = () => {

  const dispatch=useDispatch()
  const {games ,gameID}=useSelector(state => state.feeds)
const {gameSeries}=useSelector(state => state.downloaders)
//  console.log(gameSeries)

 useEffect(()=>{
  fetchData(`games/${gameID || 5286 }/game-series`).then((res)=>{

    dispatch(setGameSeries(res.results))
    // console.log(res)

})
 },[dispatch])
  

  if(gameSeries && games){

  return (
    <>
 <div className="main-container store">
<div className='div-slide' >
{
  games.length === 0 ? ( <p>Not found</p> ):
  (
    games.map((game,i)=>{
      return(
      <img src={game.background_image} key={i} alt="game_img" className="slideing-img" />
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
    <article className="fav-game">
       <img src={gameimg} alt="" className="fav-img" />
       <div>
       <p>#1 Top 2015</p>
       <h3>The witcher 3: Wild hunt </h3>
       <p className="genre">Action,Adventure</p>
       </div>
      
    </article>
  </section>

  <section className="suggested-game-container">
  <div className='heading'>  
  
    <h2 className="suggested-title">Games just for you</h2>
  </div>

<article className="suggested-games">

<div className="suggested-game">
<img src={gameimg} alt="" className="suggested-game-img" />
<div>
<h3>Game of throne</h3>
<p className="description">Unleash your criminal ambitions and dominate the streets of Los Santos in the action-packed GTA 5.</p>
</div>
</div>

<div className="suggested-game">
<img src={gameimg} alt="" className="suggested-game-img" />
<div>
<h3>Grand Thief Auto</h3>
<p className="description">Unleash your criminal ambitions and dominate the streets of Los Santos in the action-packed GTA 5.</p>
</div>


</div>



  </article>
</section>






  <section className="suggested-game-container">
  <div className='heading'>  
    <img src={chat} id='suggested-icon' alt="" />
    <h2 className="suggested-title">Games just for you</h2>
  </div>

<article className="suggested-games">

<div className="suggested-game">
<img src={gameimg} alt="" className="suggested-game-img" />
<h3>Game of throne</h3>
<p>Action,Adventure</p>
<button >Download and Play</button>
</div>

<div className="suggested-game">
<img src={gameimg} alt="" className="suggested-game-img" />

<h3>Grand Thief Auto</h3>
<p>Action,Mafia</p>
<button >Download and Play</button>
</div>



  </article>
</section>





<section className="dev-games">
<h2>Find Games By Developers</h2>

 

<article className="dev-info">

    <img src={gameimg} alt="" className="dev-logo" />
    <div className="dev-game">

{
  gameSeries.map((game,i)=>{
    return(
      <div className="dev-game1" key={i} >
      <img src={game.background_image} alt="" />
      <h3> {game.name}</h3>
  </div>
    )
  })
}
       

        
        
    </div>
</article>


</section>

    </div>
    </>
  )
}
}

export default Store