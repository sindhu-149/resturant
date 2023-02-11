import React from 'react'
import ResturantName from './ResturantName'
const Navbar = (props) => {
    const {data}=props;
    
  return (
    <div className='navbar' style={{ backgroundImage: `url(${data?.Background})` }}>
   
      <ResturantName  data={data}/>
   </div>
  )
}

export default Navbar
