import React, {useState} from 'react'

import Category from './Category'
const Menu = () => {

  const [wrap, setWrap] = useState("2")
  const [toogle,setToggle] = useState("false")

function handleClick(){
  if (toogle === "false"){
    setWrap("5")
    setToggle("true")
  }
  else{
    setWrap("2")
    setToggle("false")
  }
}
  

  const a= [1,2,3,4,5]
  return (
    <div className='menu'> 

<div className='head'>
      <p className='head-name'>most popular</p>
      <p 
      onClick={handleClick}
      className='view-btn'
      >view all</p>
    </div>
    {a.slice(0,wrap).map(cat =>(
      <Category />
    ))}
    </div>
  )
}

export default Menu