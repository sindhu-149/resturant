import React from 'react'
import Items from '../Items'

const SideBar = ( props) => {
  const {data} =props;
  return (
    <div>
    <h1 >Category</h1>
    <div className='sidebar' style={{display:"flex",flexShrink:"0"}}>
    {/* <h1 >Category</h1> */}
    <Items  data={data}/>
    </div>
    </div>
  )
}

export default SideBar