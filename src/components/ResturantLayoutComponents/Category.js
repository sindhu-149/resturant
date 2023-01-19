import React , {useState} from 'react'
import MenuCards from '../MenuCards'



const Category = (props) => {
  const [text,setText] = useState("none")
  const [toggle, setToggle] = useState("false")

  function handleClick() {
    if (toggle === "false") {
     setToggle("true")
     setText("block")
    }
    else{
      setToggle("false")
      setText("none")
    }
  }
  


  return (
    
    <div className= "category" onClick={handleClick}>
      <p style={{textAlign:"start", paddingLeft:"30px"}}> {props.name}</p>

      <p  className='menucards-list' style={{display: text}}>
      <MenuCards />
       
       </p>
    </div>
   
  )
}


export default Category