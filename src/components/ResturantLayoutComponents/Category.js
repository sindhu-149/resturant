import React , {useState} from 'react'
import MenuCards from '../MenuCards'
// import { useParams } from 'react-router-dom';


const Category = (props) => {
  // let params =useParams()
  // console.log(params);

  const {data, onAdd} = props;

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
    
    <div className= "category" >
      <p style={{textAlign:"start", paddingLeft:"30px",cursor:"pointer"}} onClick={handleClick}> {props.name}</p>

      <p  className='menucards-list' style={{display: text}}>
      <MenuCards onAdd={onAdd} data={data} name = {props.name}/>
       
       </p>
    </div>
   
  )
}


export default Category