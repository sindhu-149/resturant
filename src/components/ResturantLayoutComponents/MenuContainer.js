import React from 'react'


import MostPopular from './MostPopular'
import Menu from './Menu'

const MenuContainer = () => {
 
  return (
    <div className='menu-conatiner'>
    {/* <h1 >MenuContainer</h1> */}
    <MostPopular />
    <Menu />
    </div>
  )
}

export default MenuContainer