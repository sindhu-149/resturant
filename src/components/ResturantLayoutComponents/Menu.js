import React, {useState} from 'react'

import Category from './Category'

import numberOfCategory from "../../WOTM_TheRedBox_Gajuwaka.json" 

// let categories = numberOfCategory.map( ({Category}) => ({Category}))

// let cata = categories.map(JSON.stringify)

// cata = new Set(cata) 

// cata = Array.from(cata).map(JSON.parse)

// console.log(cata);



 
const Menu = (props) => {
  
  const {data, onAdd} = props

  const [wrap, setWrap] = useState("2")
  const [toogle,setToggle] = useState("false")

function handleClick(){
  if (toogle === "false"){
    setWrap("7")
    setToggle("true")
  }
  else{
    setWrap("2")
    setToggle("false")
  }
}
  
let result = numberOfCategory.map(a => a.Category)
result = new Set(result) 
result = Array.from(result)

// console.log(result); 


  return (
    <div className='menu'> 

<div className='head'>

      <p className='head-name'>Menu</p>
      <p 
      onClick={handleClick}
      className='view-btn' 
      >view all</p> 
    </div>
    {result.slice(0,wrap).map(cat =>(
      <Category  onAdd={onAdd} data={data} name={cat} />
      
    ))}
    </div>
  )
}

export default Menu