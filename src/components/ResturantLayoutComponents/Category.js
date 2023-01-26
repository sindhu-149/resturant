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
    
    <div  className= "category">
     <div style={{ display:"flex", justifyContent:"space-between", padding:"8px"}}  className= "category" onClick={handleClick}>
      <p style={{border:"0px solid red",textAlign:"start", padding:"5px 10px",cursor:"pointer", margin:"0px"}}> {props.name}</p>
      <img  style={{border:"0px solid red",width:"30px",height:"30px",padding:"0px 10px"}} src='https://cdn-icons-png.flaticon.com/512/7996/7996254.png'></img>
      </div>
      <p  className='menucards-list' style={{display: text}}>
      <MenuCards onAdd={onAdd} data={data} name = {props.name}/>
       
       </p>
    </div>
   
  )
}


export default Category