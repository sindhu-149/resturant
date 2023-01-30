import React from 'react'
// import data from '../../WOTM_TheRedBox_Gajuwaka.json'const types= ["Pizza","Italian","Fast Foods","Western"]

const ResturantName = (props) => {

  const {data}=props;
  
  return (
    <div className='title'
    // style={{backgroundImage:`url(${data.Background})`}}
    >
    <div className='title-bg' >
     <h1>{data.Name}</h1>
     <img  style={{ width:"30px", height:"30px", margin:"-8px 15px"}} src="https://cdn-icons-png.flaticon.com/512/854/854878.png"></img>
     <h5 style={{ display:"inline"}}>{data.Address}</h5>
     <div  className='title-bg-type'>
   {data.Tags.map(type =>(
        <span 
        className='title-bg-type-test'
        
        >{type}</span>
      ))}
   </div>
     
    </div>
    {/* </div> */}
    <div className='resturant-name' >
      <img className='resturant-name-image'  src="https://charatoon.com/photo/thum/6342.png"></img>
    </div>
    
    </div>
  )
}

export default ResturantName