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
      // <div>
      //   {windowWidth < 680 ? 
      //   <div>good morning</div>
         
      //     :
      //     <div>sindhu</div>
      //   }
      // </div>
   
   


    
    <div style={{display:"flex", backgroundColor:"pink",justifyContent:"space-between"}}>
    <img src={logo}></img>
    {windowWidth < 680 ? 
        <div style={{border:"0px solid black", margin:"auto 0"}}>
        <img onClick={handleClick} style={{width:"30px",position:"relative",paddingRight:"0px"}} src='https://cdn-icons-png.flaticon.com/512/4204/4204600.png'></img>
        <div style={{position:"absolute",backgroundColor:"skyblue",right:"0",padding:"10px 30px 10px 8px",display:show}}>
          <div style={{padding:"10px 0px"}}>Home</div>
          <div style={{padding:"10px 0px"}}>Resturant</div>
          <div style={{padding:"10px 0px"}}>Pricing</div>
          <div style={{padding:"10px 0px"}}>Contact us</div>
        </div>
        </div>
         
          :
          <div style={{border:"0px solid black",display:"flex",width:"600px",fontSize:"20px"}}>
    <div style={{padding:"0px",margin:"auto"}}>Home</div>
    <div style={{padding:"0px",margin:"auto"}}>Resturants</div>
    <div style={{padding:"0px",margin:"auto"}}>Pricing</div>
    <div style={{padding:"0px",margin:"auto"}}>Contact us</div>
    </div>
        }
   
</div>
  )
}

export default Navbar

