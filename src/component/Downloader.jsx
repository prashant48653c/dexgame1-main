import gameimg from '../assets/gameimg.png'
import chat from '../assets/chat.svg'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchData } from '../fetched/fetch'
import { useDispatch } from 'react-redux'
import { setScreenshot, setDetails, setGameSeries, setDownloadLinks, setPublisherData } from '../slices/downloaderslicer'
import { setGameID } from '../slices/feedslicer'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Downloader = () => {

const   [image, setImage] = useState('')
const [show, setshow] = useState(true)



const dispatch = useDispatch()
const { screenshot, details, downloadLinks, publisherData } = useSelector((state) => state.downloaders);
const { gameID,games } = useSelector(state => state.feeds)

const navigate=useNavigate()
const navigateTo=(results)=>{
    console.log(results.id)
      dispatch(setGameID(results.id))
      navigate("/downloader")
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; 
  }

useEffect(() => {

fetchData(`games/${gameID}/screenshots`).then((res) => {
if (res) {

dispatch(setScreenshot(res.results))

}
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; 
})

fetchData(`games/${gameID}`).then((res) => {
// console.log(res)
dispatch(setDetails(res))


})

fetchData(`games/${gameID}/stores`).then((res) => {

console.log(res)
dispatch(setDownloadLinks(res.results))

})




}, [dispatch,gameID])

const handleImg=(e)=>{

const newImg=e.target.src;
setImage(newImg)
console.log(image)
}
const handleShow=()=>{
show ? setshow(false)
: setshow(true)
}




if (details && screenshot && gameID && downloadLinks) {
return (
<>
<div className="main-container">

<section className="grid-two-colume about">


<article className="about-game">
<div className="game-images">
<img src={ image != [] ? image :  screenshot[0].image} alt="" />
<div className="img-scroller">
<img src={chat} alt="" />

<div className="other-game-images">
{
screenshot.map((img, i) => {
return (
<img src={img.image} onClick={handleImg} alt="" key={i} />

)
})
}
</div>

<img src={chat} alt="" />


</div>
</div>


<section className="game-detail">
<h2>About the game</h2>
{
show ?   <p>{details.description_raw.slice(0, 500) + "..."}</p> :
<p>{details.description_raw}</p>
}


<button onClick={handleShow } >{
show ? "Show more": "Show less"
}  
 

</button>
</section>

<section className="meet-the-dev">
<h2>Meet the developer</h2>
<div className="logo-rate">
    {
        details?.publishers[0]?.image_background &&
 <img src={details.publishers[0].image_background} alt="" /> 

    }
<div>
    {
        details?.publishers[0]?.name &&
        <h4>{details.publishers[0].name}</h4>
    }


<p>Realeased Date: {details.released}</p>
</div>

</div>
</section>



<section className="reviews">
<h2>Reviews</h2>
<div className="rating">
<div className="box">
<p>Total reviews</p>
<h4>{Math.round(details.ratings_count / 1000)}k</h4>

</div>

<div className="box">
<p> Average rating</p>
<h4>{details.rating}</h4>




</div>
</div>


<div className="comment">
<div className="pp-detail">
<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"} alt="" />
<p>Prashant Acharya</p>

</div>



<div className="actual-comment">
<p>Playing this game was an incredible experience that left me thoroughly entertained. From the moment I started, it was clear that a lot of thought had been put into the gameplay mechanics and design. The engaging challenges and well-crafted levels kept me hooked, ensuring that I had a blast every time I played</p>
</div>
<div className="date">
<p>2080-09-24</p>
</div>
</div>



<div className="comment">
<div className="pp-detail">
<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"} alt="" />
<p>Safal Poudel</p>

</div>



<div className="actual-comment">
<p>I have to say, the fun factor of this game is off the charts. Whether I was battling enemies, solving puzzles, or exploring the richly detailed world, I was consistently having a great time. The developers have truly succeeded in creating an immersive environment that's both enjoyable and memorable.</p>
</div>
<div className="date">
<p>2076-09-11</p>
</div>
</div>
<button className="show-more">Show More
<img src={chat} alt="" />
</button>
</section>


<section className="store-more-game">
<h2>You may also like</h2>
<div className="game-list">

{
    games.map((results,i)=>{
        return(
<div key={i} className="store-games">
<img src={results.background_image} alt="" />
<div className='detail-box'>

<h3>{results.name}</h3>
<p>Experience the gritty, unforgiving frontier of Red Dead Redemption 2 and forge your path as a gunslinger in a breathtaking....</p>
<button  onClick={() => navigateTo(results)}  >Download Now</button>

</div>
</div>
        )
    })
}


 

</div>
<button className="show-more">Show More</button>
</section>











</article>

<aside className="download-game">



<img className='download-game-img' src={details.background_image_additional} />




<div>
<p>#1 Top 2013</p>
<p>Action, Adventure</p>
</div>

<button className="download-now"> <Link style={{ color: 'white', textDecoration: 'none' }} to={downloadLinks[0].url} target='_blank' > Download Now </Link></button>

<button className="add-wishlist">Add to Wishlist</button>
</aside>
</section>
</div>

</>

)
} else {
console.log("Loading")
}
}

export default Downloader