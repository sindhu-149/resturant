import React, { useState } from 'react'
import{ Card  , totalCards}from '../Card'

const MostPopular = () => {
  const [num, setNum] = useState("9")
  // const [wrap, setWrap] = useState("no-wrap")
  const [toogle,setToggle] = useState("false")

function handleClick(){
  if (toogle === "false"){
    setNum(totalCards)
    // setWrap("wrap")
    setToggle("true")
  }
  else{
    setNum("9")
    // setWrap("no-wrap")
    setToggle("false")
  }
}

  return (
    <div className='most-popular'>
    <div className='head'>
      <p className='head-name'>Most Popular</p>
      <p 
      className='view-btn'
      
      onClick={handleClick}
      >view all</p>
    </div>
    <div  className='list' 
    >
      <Card  number={num} />
  
    </div>
    
    </div>
  )
}

export default MostPopular 

