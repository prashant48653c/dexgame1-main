import { Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Option = () => {
  const { userData } = useSelector(state => state.auths)
  console.log(userData)
  const navigate = useNavigate()
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/")
    window.location.reload()
  }

  if (userData) {
    return (
      <>



        <section className="d-container">
          <div className="d-menus">
            <div className="d-dark-profile">
              <div className="d-profile">
                <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="" className="d-pp" />
                <div className="d-pp-info">


                  <h2>{userData[0].user.displayName || "Your Name"}</h2>
                  <p>{userData[0].user.email}</p>


                </div>
              </div>


              <div className="d-dark">
                <div>
                  <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="" className="d-icon" />
                  <p>Dark mode</p>
                </div>

                <div>
                  <input type="checkbox"
                    id="switch"
                    className="checkbox" />

                  <label htmlFor="switch"
                    className="toggle">

                  </label>
                </div>
              </div>

            </div>
            <div className="d-menu">
              <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="" className="d-icon" />
              <p>Add account</p>
            </div>
            <div className="d-menu logout" onClick={handleLogOut} >
              <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="" className="d-icon" />
              <p>Log out</p>
            </div>


          </div>
        </section>




      </>
    )
  }
}

export default Option