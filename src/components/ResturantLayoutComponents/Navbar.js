import React from 'react'
import ResturantName from './ResturantName'

const Navbar = (props) => {
const {res}=props
  return (
    <div className='navbar'>
    <ResturantName  data={res}/>
    </div>
  )
}

export default Navbar