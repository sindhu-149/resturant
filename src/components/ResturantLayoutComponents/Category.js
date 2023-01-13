import React , {useState} from 'react'
import MenuCards from '../MenuCards'



const Category = () => {
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

    <div  className= "category" onClick={handleClick}>
      <p>menu</p>

      <p  className='menucards-list' style={{display: text}}>
      <MenuCards />
       
       </p>
    </div>
   
  )
}


export default Category