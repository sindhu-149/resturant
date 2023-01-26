import React, { useState,useEffect } from 'react'
import{ Card  }from '../Card'
// import React, { useState,  } from 'react';

const MostPopular = (props) => {

  const {data, onAdd} = props;

//   const [num, setNum] = useState("9")
//   // const [wrap, setWrap] = useState("no-wrap")
//   const [toogle,setToggle] = useState("false")

// function handleClick(){
//   if (toogle === "false"){
//     setNum(totalCards)
//     // setWrap("wrap")
//     setToggle("true")
//   }
//   else{
//     setNum("9")
//     // setWrap("no-wrap")
//     setToggle("false")
//   }
// }

const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const [displayText, setDisplayText] = useState('');

useEffect(() => {
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
 console.log(windowWidth);
 useEffect(() => {
  if (windowWidth < 600) {
    setDisplayText("sindhu");
  } else {
    setDisplayText("school");
  }
}, [windowWidth]);
  return (
    <div className='most-popular'>
   
    <div className='head'>
      <p className='head-name'>Most Popular</p>
      {/* <p 
      className='view-btn'
      

      >view all</p> */}
    </div>
    <div  className='list' 
    >
      <Card  data={data} onAdd={onAdd} />
  
    </div>
    
    </div>
  )
}

export default MostPopular 

