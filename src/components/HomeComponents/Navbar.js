import React, { useState, useEffect } from 'react';
import logo from '../../images/logo.png'
const Navbar = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [show, setShow] =useState("none")
  const [display, setDisplay] =useState("false")
 
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  function handleClick(){
    if(display === "false"){
      setShow("block")
      setDisplay("true")
    }
    else{
      setShow("none")
      setDisplay("false")
    }

  }

  return (
    <div  className='home-navbar'>
    <img  className='logo' src={logo}></img>
    {windowWidth < 680 ? 
        <div className='navbar-text'>
        <img onClick={handleClick} className='nav-side-btn' src='https://cdn-icons-png.flaticon.com/512/4204/4204600.png'></img>
        <div className='nav-text-container' style={{display:show}}>
          <div className='text'>Home</div>
          <div className='text'>Resturant</div>
          <div className='text'>Pricing</div>
          <div className='text'>Contact us</div>
        </div>
        </div> 
          :
          <div className='text-container'>
    <div className='nav-text'>Home</div>
    <div className='nav-text'>Resturants</div>
    <div className='nav-text'>Pricing</div>
    <div className='nav-text'>Contact us</div>
    </div>
        }
   
</div>
  )
}

export default Navbar

