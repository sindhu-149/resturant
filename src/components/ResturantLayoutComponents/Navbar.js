import React from 'react'
import ResturantName from './ResturantName'
const Navbar = (props) => {
const {res}=props
  return (
    <div className='navbar'
    // style={{ backgroundImage: `url(${res.Background})`}}
    >
    {/* <img
    style={{
      height: "100",
  width: "100%",
  objectit: cover;
    }}
     src={res.Background}></img> */}
    <ResturantName  data={res}/>
    </div>
  )
}

export default Navbar