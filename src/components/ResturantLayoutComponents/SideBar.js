import React from 'react'
import Items from '../Items'

const SideBar = ( props) => {
  const {data} =props;
  return (
    <div className='sidebar'>
    <h1 >Category</h1>
    <Items  data={data}/>
    </div>
  )
}

export default SideBar