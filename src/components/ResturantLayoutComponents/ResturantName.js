import React from 'react'


const ResturantName = (props) => {

  const {data}=props;
  
  return (
    <div>
    <div className='title-bg' >
     <h1>{data.Name}</h1>
     <img className='map-image' src="https://cdn-icons-png.flaticon.com/512/854/854878.png"></img>
     <h5 style={{ display:"inline"}}>{data.Address}</h5>
     <div  className='title-bg-type'>
     {data.Tags.map(type =>(
        <span  className='title-bg-type-test'>{type}</span>
      ))}
   </div>   
    </div>
    <div className='resturant-name' >
      <img className='resturant-name-image'  src="https://charatoon.com/photo/thum/6342.png"></img>
    </div>  
    </div>
  )
}

export default ResturantName