import React from 'react'

const types= ["Pizza","Italian","Fast Foods","Western"]

const ResturantName = () => {
  
  return (
    <div className='title'>
    <div className='title-bg'>
     <h1>The Pizza Store</h1>
     <img  style={{ width:"30px", height:"30px", margin:"-6px 15px"}} src="https://cdn-icons-png.flaticon.com/512/854/854878.png"></img>
     <p style={{ display:"inline"}}>21 A, Street Ram Nagar, Hyderabda</p>
     <div 
     style={{
      marginTop:"40px",
     }}
     >
   
      {types.map(type =>(
        <span 
        style={{
          margin:"0px 10px",
          padding:"10px",
       
          borderRadius:"5px",
          backgroundColor: "#ECECEC"
        }}
         
        >{type}</span>
      ))}
    </div>
    </div>
    <div className='resturant-name'>
      <img className='resturant-name-image' src="https://charatoon.com/photo/thum/6342.png"></img>
    </div>
    
    </div>
  )
}

export default ResturantName