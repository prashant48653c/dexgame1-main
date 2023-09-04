import React from 'react'
import chat from '../assets/chat.svg'

export const Editor = () => {
  return (
    <>
    <main className="main-container">

    <section className="profile-editor">
    <h3>Edit profile</h3>
    <p>My Profile</p>
<div className="image-editor j">
<img src={chat} alt="" />

</div>

<div className="inputs-editor">
<p>Change username</p>
    <input type="text" placeholder='John Lobby' />

</div>
 
   <div className="inputs-editor inputs-editor2">
   <p>Change email</p>
    <input type="email" placeholder='johnlobby23@gmail.com' />
   </div>


   


    <div className="buttons">
        <button>Cancel</button>
        <button id='save'>Save</button>
    </div>
</section>
    </main>

    </>
  )
}
