// import React,{useState} from 'react'

// const Items = (props) => {
//   // const itemsList = ["All", "Pizza", "Burger", "Sandwitch", "Noodels", "French fries", "Biryani"]
//   const {data} = props;
 
//   let result = data.map(a => a.Category)
//   result = new Set(result) 
//   result = Array.from(result)
//   result= ["All",...result]
//   return (
//     <div className='itemsList' style={{flexShrink:"0", }}>
//         {result.map(name =>(
//           <div style={{textAlign:"right"}}>
//           <button  className='item'   value= {name} >{name}</button>
//           {/* <Category /> */}
//           </div>
     
//         ))}
//     </div>
//   );
  
// }  

// export default Items



import React from 'react'
import MenuCards
 from './MenuCards';
const Items = (props) => {
     const {name,text,data,onAdd,onClick} = props;
  return (

<div  className= "category" >
     <div  style={{ display:"flex", justifyContent:"space-between", padding:"8px",cursor:"pointer"}}  
     onClick={onClick}
     > 
     {/* <div style={{backgroundColor:"red",width:"70%",display:text}}> */}
        <p style={{border:"0px solid red",textAlign:"start", padding:"5px 10px", margin:"0px"}}> {name}</p>
        <img  style={{border:"0px solid red",width:"30px",height:"30px",padding:"0px 10px"}} src='https://cdn-icons-png.flaticon.com/512/7996/7996254.png'></img>
      </div>
      {/* </div> */}
      <p  
      className='menucards-list'
      
       style={{display: text}}
       >

      <MenuCards onAdd={onAdd} data={data} name = {name}/>
       
       </p>
    </div>

    
  )
}

export default Items