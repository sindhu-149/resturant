import React, { useState } from 'react'
import{ Card  , totalCards}from '../Card'

const MostPopular = () => {
  const [wrap, setWrap] = useState("9")
  const [toogle,setToggle] = useState("false")

function handleClick(){
  if (toogle === "false"){
    setWrap(totalCards)
    setToggle("true")
  }
  else{
    setWrap("9")
    setToggle("false")
  }
}

  return (
    <div className='most-popular'>
    <div className='head'>
      <p className='head-name'>most popular</p>
      <p 
      className='view-btn'
      
      onClick={handleClick}
      >view all</p>
    </div>
    <div  className='list' 
    >
      <Card number={wrap} />
  
    </div>
    
    </div>
  )
}

export default MostPopular 

