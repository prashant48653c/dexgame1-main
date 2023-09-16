import { Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from "react";

const Community = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
<>


 
<section class="d-container">
    <div class="d-menus">
      <div class="d-dark-profile">
        <div class="d-profile">
           <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="" class="d-pp" />
        <div class="d-pp-info">
          <h2>Prashant</h2>
          <p>dgdt34@gmail.com</p>
        </div>
        </div>
       
        
        <div class="d-dark">
          <div>
          <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="" class="d-icon" />
          <p>Dark mode</p>
          </div>
           
          <Button class="d-toggle"
      colorScheme={isToggled ? "green" : "red"}
      onClick={handleToggle}
    >
      {isToggled ? "On" : "Off"}
    </Button>
        </div>
        
        </div>
        <div class="d-menu">
          <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="" class="d-icon" />
          <p>Add account</p>
        </div>
                <div class="d-menu">
                  <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="" class="d-icon" />
          <p>Log out</p>
                </div>

      
    </div>
  </section>
  
  
  

</>
  )
}

export default Community