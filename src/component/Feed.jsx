import React, { useEffect } from 'react'
import Navbar from './Navbar'
import gameimg from '../assets/gameimg.png'
import chat from '../assets/chat.svg'
import { fetchData } from '../fetched/fetch'
import { setGameID, setGames,setSearchResult ,setSearchedKey} from '../slices/feedslicer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserData } from '../slices/authslicer'
import Option from './Option'






const Feed = () => {
  const dispatch = useDispatch()
  const { games, gameID,searchResult,searchedKey } = useSelector((state) => state.feeds)
  const { userData } = useSelector(state => state.auths)
// console.log(searchedKey)

//  dispatch(setSearchedKey("g"))

  useEffect(() => {
    const mydata = JSON.parse(localStorage.getItem("data"));

    if (mydata) {
      dispatch(setUserData([mydata]))
      console.log(userData)
    }



    fetchData("games").then((res) => {
      // console.log(res.results)

      dispatch(setGames(res.results))

    })

   
  }, [dispatch])

  console.log(gameID)

  //navigate setting
  const navigate = useNavigate()

  const navigateToDownloader = (game) => {
    console.log(game.id)
    dispatch(setGameID(game.id))
    navigate("/downloader")
  }

 const navToStore=()=>{
  navigate("/store")
 } 








  if (games ) {
    return (
      <>
        <div className="main-container">

          <section className="without-download-container ">
            <p className="instand-play">Instant Play</p>




            <article>
              <a href="https://krunker.io/" target="_blank" > <img src={"https://images.crazygames.com/games/krunker-io/cover-1591336739727.png?auto=format,compress&q=75&cs=strip"} alt="/Game without download" className="game" />
              </a>
              <p className="hover-p">Krunker</p>
            </article>

            <article>
              <a href="https://www.twoplayergames.org/embed/two-ball-3d" target="_blank" > <img src={"https://s.cafebazaar.ir/images/upload/screenshot/com.rhm.TwoBall3d-ec669206-9744-48ba-9370-4a11c523d913.jpeg?x-img=v1/resize,h_300,lossless_false"} alt="/Game without download" className="game" />
              </a>
              <p className="hover-p">Two Ball 3D</p>
            </article>

            <article>
              <a href="https://poki.com/en/g/subway-surfers" target="_blank" > <img src={"https://subwaysurfers.com/media/f2ldlfpi/subwaysurfers_01.png"} alt="/Game without download" className="game" />
              </a>
              <p className="hover-p">Subway Surfer</p>
            </article>

            <article>
              <a href="https://hole-io.com/" target="_blank" > <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_FBVC51KNeQR8b_gqxTK-P_RB8sCmqf5o1nT3jwKyxyYCDGu4WgSbtbuBOtZIJe1btM&usqp=CAU"} alt="/Game without download" className="game" />
              </a>
              <p className="hover-p">Hole IO</p>
            </article>

            <article>
              <a href="https://slither.io/" target="_blank" > <img src={"https://cdn6.aptoide.com/imgs/e/d/d/eddf59db19e47f26e20042618cb025e8_fgraphic.png"} alt="/Game without download" className="game" />
              </a>
              <p className="hover-p"> Slither</p>
            </article>

            <article>
              <a href="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif" target="_blank" > <img src={"https://images.hindustantimes.com/tech/img/2023/04/07/1600x900/526ab8efaf60be59ccf03e314e019a3a_1671931798562_1680829788841_1680829788841.jpg"} alt="/Game without download" className="game" />
              </a>
              <p className="hover-p">Free Fire</p>
            </article>










          </section>

          <section className="banner">
            <article>
              <div className="banner-text">
                Games.<br /> Free. Now
              </div>
              <button className="download-banner" onClick={navToStore} >
                <p className="text-download"  >Download and Play</p>
              </button>

            </article>

            <div className="banner-imgs">
              <img src={gameimg} alt="" className="banner-img1" />
              <img src={gameimg} alt="" className="banner-img2" />

              <img src={gameimg} alt="" className="banner-img3" />

              <img src={gameimg} alt="" className="banner-img4" />

            </div>

          </section>



          <section className="suggested-game-container">
            <div className='heading'>
              <img src={chat} id='suggested-icon' alt="" />
              <h2 className="suggested-title">Games just for you</h2>
            </div>

            <article className="suggested-games">

              {games.length === 0 ? (
                <p>No games available</p>
              ) : (
                games.map((game, i) => (
                  <div className="suggested-game" key={i} >
                    <img src={game.background_image} alt="game_img" className="suggested-game-img" />

                    <h3>{game.name}</h3>
                    <p>Action,Adventure</p>
                    <button onClick={() => navigateToDownloader(game)} >Download and Play</button>
                  </div>
                ))
              )}


              {/* <div className="suggested-game">
<img src={gameimg} alt="" className="suggested-game-img" />

<h3>Grand Thief </h3>
<p>Action,Mafia</p>
<button >Download and Play</button>
</div> */}

            </article>
          </section>



          <section className="more-games">
            <h2>More games</h2>

            <article className="more-game">

              {games.length === 0 ?
                (<p>No results</p>) :
                (
                  games.map((game, i) => {
                    return (
                      <div className="more-game-div" key={i} >
                        <img src={game.background_image || gameimg} alt="game_img" />
                      </div>
                    )

                  })

                )
              }


            </article>

          </section>


        </div>

      </>
    )
  } else {
    console.log("Loading")
  }
}

export default Feed